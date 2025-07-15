# Django Utilities
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

# Standard Python Modules
import os
import json
import sqlite3

# LangGraph & LangChain Imports
from langgraph.graph import add_messages, StateGraph, END
from langgraph.checkpoint.sqlite import SqliteSaver
from langgraph.prebuilt import ToolNode
from langchain_core.messages import HumanMessage
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_groq import ChatGroq
from langchain_google_genai import ChatGoogleGenerativeAI

# Typing for state definition
from typing import TypedDict, Annotated

# -----------------------------
# 🔧 Environment Variables (Normally use dotenv)
# -----------------------------

# -----------------------------
# 💾 SQLite Checkpointing
# -----------------------------
sqlite_conn = sqlite3.connect("checkpoint.sqlite", check_same_thread=False)
memory = SqliteSaver(sqlite_conn)

# -----------------------------
# 🧠 Define State for LangGraph
# -----------------------------
class BasicChatBot(TypedDict):
    messages: Annotated[list, add_messages]

# -----------------------------
# 🔧 Tool Setup
# -----------------------------
search_tool = TavilySearchResults(max_results=2)
tools = [search_tool]

# -----------------------------
# 🤖 LLM with Tool Binding
# -----------------------------
llm = ChatGroq(model="llama-3.1-8b-instant")
llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash-001")
llm_with_tools = llm.bind_tools(tools=tools)

# -----------------------------
# 🧠 Chatbot Node Logic
# -----------------------------
def chatbot(state: BasicChatBot):
    response = llm_with_tools.invoke(state["messages"])
    return {
        "messages": [response]
    }

# -----------------------------
# 🔁 Route to Tool if Needed
# -----------------------------
def tools_router(state: BasicChatBot):
    last_message = state["messages"][-1]
    if hasattr(last_message, "tool_calls") and len(last_message.tool_calls) > 0:
        return "tool_node"
    else:
        return END

# -----------------------------
# 🧰 Tool Node Setup
# -----------------------------
tool_node = ToolNode(tools=tools)

# -----------------------------
# 🕸️ Build LangGraph
# -----------------------------
graph = StateGraph(BasicChatBot)
graph.add_node("chatbot", chatbot)
graph.add_node("tool_node", tool_node)
graph.set_entry_point("chatbot")
graph.add_conditional_edges("chatbot", tools_router)
graph.add_edge("tool_node", "chatbot")
app = graph.compile(checkpointer=memory)

# -----------------------------
# ⚙️ LangGraph Config
# -----------------------------
config = {
    "configurable": {
        "thread_id": 1
    }
}

# -----------------------------
# 🌐 Django View (API Endpoint)
# -----------------------------
@csrf_exempt
def index(request):
    if request.method == "POST":
        user_input = json.loads(request.body).get("prompt", "")
        response = app.invoke({
            "messages": [HumanMessage(content=user_input)]
        }, config=config)

        final_message = response["messages"][-1].content
        return JsonResponse({"message": final_message})
