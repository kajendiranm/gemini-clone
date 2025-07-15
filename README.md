# ✨ Gemini Clone — AI Chatbot with Real-Time Web Search

A cutting-edge conversational AI chatbot that uses **LangGraph**, **Google Gemini 2.0 Flash**, and **Tavily Search**, all orchestrated from a Django backend and extendable with a React frontend. The project features LLM tool-routing, persistent SQLite memory, and real-time search capabilities inspired by advanced assistants.

---

## ⚙️ Tech Stack

| Layer           | Technology                             |
|-----------------|----------------------------------------|
| **Backend**     | Django (Python)                        |
| **LLM Model**   | Google Gemini 2.0 Flash (`gemini-2.0-flash-001`) |
| **Graph Engine**| LangGraph (LangChain)                  |
| **Search Tool** | Tavily Search API                      |
| **Memory**      | LangGraph SQLite checkpointer          |
| **Frontend**    | React.js (with npm tooling)            |

---

## 🚀 Features

- Conversational AI powered by **Google Gemini 2.0 Flash**
- Real-time information retrieval via **Tavily Search**
- Tool routing logic with LangGraph
- Persistent multi-turn memory using SQLite
- Django REST API backend for frontend integration
- Secure API keys using `.env` file
- React frontend support

---

## 🛠️ Setup Instructions

### Backend Setup (Django)

#### 1. Clone the Repository
```
git clone https://github.com/kajendiranm/gemini-clone.git
cd gemini-clone
```

#### 2. Create a Virtual Environment
```
python -m venv env
source env/bin/activate # For Windows: env\Scripts\activate
```

#### 3. Create a `.env` File

Create a plain text `.env` file and paste your keys:
```
GOOGLE_API_KEY=your_google_api_key
TAVILY_API_KEY=your_tavily_api_key
GROQ_API_KEY=your_groq_api_key
DJANGO_SECRET_KEY=your_django_secret_key
```

#### 4. Install Dependencies
```
pip install -r requirements.txt
```

#### 5. Run Django Server
```
python manage.py runserver
```

---

## 💻 Frontend Setup (React)

### 1. Create React App
```
npx create-react-app gemini-chat-frontend
cd gemini-chat-frontend
```

### 2. Install Dependencies
```
npm install
```

### 3. Start the React App
```
npm start
```

Runs at: `http://localhost:3000`

---

## 📡 API Usage

- **Endpoint:** `POST /`
- **Headers:** `Content-Type: application/json`
- **Payload:**

{
"prompt": "Tell me about AI"
}

text

- **Response:**

{
"message": "AI stands for Artificial Intelligence..."
}
