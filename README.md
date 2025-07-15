# ✨ Gemini Clone — AI Chatbot with Real-Time Web Search
A cutting-edge conversational AI chatbot that uses LangGraph, Google Gemini 2.0 Flash, and Tavily Search, all orchestrated from a Django backend and extendable with a React frontend. The project features LLM tool-routing, persistent SQLite memory, and real-time search capabilities inspired by advanced assistants

## ⚙️ Tech Stack
+ Backend      -	Django (Python)
+ LLM Model    -	Google Gemini 2.0 Flash (gemini-2.0-flash-001)
+ Graph Engine -	LangGraph (LangChain)
+ Search Tool  - Tavily Search API
+ Memory       - LangGraph SQLite checkpointer
+ Frontend     - React.js (with npm tooling)

## 🚀 Features
- Conversational AI powered by Google Gemini 2.0 Flash
- Real-time information retrieval via Tavily Search
- Tool routing logic with LangGraph
- Persistent multi-turn memory using SQLite
- Django REST API backend for frontend integration
- Extensible React frontend for an interactive chat UI

## 🖼️ React Frontend Setup
The project is ready to connect to a React.js frontend. This demonstrates your full-stack skills and enables a modern chat interface.

### 📦 Frontend Setup Instructions
1. Create React App

If you haven’t created a frontend yet:
```
npx create-react-app gemini-chat-frontend
cd gemini-chat-frontend
```

2. Install Dependencies

Navigate to your React project folder and install packages:
```
npm install
```

3. Start the React App
```
npm start
```
This will launch the React development server at http://localhost:3000.

## 🧠 How the Model Works
- The backend can use Google Gemini 2.0 Flash (gemini-2.0-flash-001) as the primary LLM for chat and tool invocation.
- LangGraph routes prompts between the LLM and any external search tools (like Tavily).
- Tool results are passed back to the LLM, and final conversational responses are generated and sent to the frontend.
