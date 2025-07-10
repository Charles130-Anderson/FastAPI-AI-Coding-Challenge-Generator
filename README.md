---

# 🤖 FastAPI AI Coding Challenge Generator

A **full-stack AI-powered coding challenge generator** built using **FastAPI** for the backend and **Vite + React** for the frontend. Authenticated via **Clerk**, it leverages **OpenAI** to dynamically generate programming challenges tailored to user-selected difficulty levels and topics.

---

## 🌐 Live Demo

* 🔗 Frontend: [Fastapi-Ai Coding Challenge Generator](https://fastapi-ai-coding-challenge-generator-production-ffe3.up.railway.app)
* 📘 Docs: [Backend OpenAPI](https://fastapi-ai-coding-challenge-generator-production.up.railway.app/docs)

---

## 🚀 Backend Features

* ⚙️ **AI Challenge Generation** – Uses OpenAI API to generate customized challenges
* 🔐 **JWT Authentication** – Clerk-powered secure authentication and user sessions
* 📊 **Quota Management** – Limit the number of challenges a user can generate
* 🌍 **CORS Configuration** – Cross-domain access support for frontend-backend communication
* 🧾 **Webhooks** – Sync Clerk webhooks for real-time auth and user data updates

---

## 🎨 Frontend Features

* 🖥️ **React + Vite** – Fast and lightweight frontend scaffold
* 🔐 **Clerk Integration** – Seamless sign in/sign up, session handling
* 🤖 **Prompt Configuration** – Choose difficulty and topic before generating
* 🧠 **Dynamic Challenge Display** – Displays AI-generated challenges with clean formatting
* 💡 **Error Feedback** – Graceful handling of auth/API errors (e.g., 401, 500)

---

## 🧱 Tech Stack

### Backend

* **FastAPI**
* **Pydantic**
* **Clerk Backend SDK**
* **OpenAI Python SDK**
* **Uvicorn**
* **dotenv**

### Frontend

* **React + Vite**
* **Clerk Frontend SDK**
* **Axios**
* **TailwindCSS**

---

## 📁 Project Structure

### Backend

```
backend/
├── routes/                  # API routes (challenge, webhooks)
├── utils.py                 # Clerk auth utils
├── schemas.py               # Pydantic schemas
├── app.py                   # FastAPI entrypoint
├── .env                     # Environment variables
└── requirements.txt         # Dependencies
```

### Frontend

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/               # Main pages (Home, Auth, etc.)
│   ├── utils/               # Axios setup, helpers
│   ├── App.jsx              # Routing and layout
│   └── main.jsx             # Vite entrypoint
├── .env                     # VITE_BACKEND_URL and Clerk keys
└── vite.config.js           # Vite setup
```

---

## 🛠️ Local Setup Instructions

### Backend

1. **Clone the repo**

   ```bash
   git clone https://github.com/yourusername/FastAPI-AI-Coding-Challenge-Generator.git
   cd backend
   ```

2. **Create virtual environment and activate**

   ```bash
   python -m venv env
   source env/bin/activate  # Windows: env\Scripts\activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Add `.env`**

   ```env
   CLERK_SECRET_KEY=your_clerk_backend_key
   JWT_KEY=your_clerk_jwt_key
   OPENAI_API_KEY=your_openai_key
   CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
   ```

5. **Run the backend**

   ```bash
   uvicorn app:app --reload
   ```

---

### Frontend

1. **Navigate to frontend**

   ```bash
   cd ../frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add `.env`**

   ```env
   VITE_BACKEND_URL=http://localhost:8000
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

4. **Start the frontend**

   ```bash
   npm run dev
   ```

---

## 📬 API Endpoints

| Method | Endpoint                  | Description                     |
| ------ | ------------------------- | ------------------------------- |
| POST   | `/api/generate-challenge` | Generate a new coding challenge |
| GET    | `/api/quota`              | Fetch user’s quota info         |
| POST   | `/webhooks/clerk`         | Handle Clerk webhook events     |

---

## 📦 Deployment

Both frontend and backend are deployed on **Railway**:

* 🔄 Separate Railway projects for frontend and backend
* 🌐 Backend exposed on port `8000`
* ⚙️ Frontend served via **Nginx** on port `80`
* 📁 Environment variables configured in Railway’s **Variables** section

---

## ✅ TODO / Future Enhancements

* ✅ Improve CORS configuration and validation
* ✅ Add frontend validation and feedback
* ⏳ Add database support for persistent user data
* ⏳ Admin dashboard to monitor usage and feedback
* ⏳ Allow downloadable code challenge files

---

## 🛡️ License

MIT License

---

## 📚 Acknowledgements

* [FastAPI](https://fastapi.tiangolo.com/)
* [Clerk](https://clerk.com/)
* [OpenAI](https://platform.openai.com/)
* [Railway](https://railway.app/)

---
