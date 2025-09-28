# Study Helper

Live Demo: [https://study-helper-six.vercel.app/](https://study-helper-six.vercel.app/)

---

## Overview
Study Helper is a full-stack AI-powered study assistant web application. It helps users learn smarter with features like AI chat, quiz generation, flashcards, PDF summarization, and more. The project is built with a modern React + TypeScript frontend and a Node.js + Express + TypeScript backend, integrating OpenAI and Gemini APIs for advanced AI capabilities.

---

## Features
- **User Authentication:** Secure registration, login, JWT-based sessions, and protected routes.
- **Dashboard:** Personalized dashboard with access to all study features.
- **AI Chat:** Chat with AI for study help, explanations, and Q&A.
- **Quiz Generator:** Create custom quizzes from text or documents.
- **Flashcards:** Generate flashcards for efficient revision.
- **PDF Summarization:** Upload PDFs and get AI-generated summaries.
- **Usage Stats:** Track your study activity and usage.
- **Responsive UI:** Mobile-friendly, animated landing page, and modern design.
- **API Integrations:** Uses OpenAI and Gemini APIs for AI features.

---

## Tech Stack
- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript, MongoDB
- **APIs:** OpenAI API, Gemini API (API keys required)
- **Deployment:** Vercel (frontend), Render (backend)

---

## Architecture
- **Frontend:**
  - SPA (Single Page Application) using React Router for navigation
  - State management via React Context and hooks
  - API calls to backend for authentication and study features
  - Environment variables for API URLs and keys
- **Backend:**
  - RESTful API with Express
  - JWT authentication middleware
  - MongoDB for user and study data
  - Modular controllers, routes, and middlewares
  - CORS configured for frontend domain
  - Environment variables for secrets and API keys

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB (local or cloud)
- OpenAI API key
- Gemini API key

### Local Development

#### Backend Setup
1. **Clone the repo:**
   ```sh
   git clone https://github.com/satyam0777/Study-helper.git
   cd Study-helper/studyhelper-backend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment:** Create a `.env` file:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=7d
   OPENAI_API_KEY=your_openai_api_key
   GEMINI_API_KEY=your_gemini_api_key
   ```
4. **Start the backend:**
   ```sh
   npm run dev
   ```

#### Frontend Setup
1. **Go to the frontend folder:**
   ```sh
   cd ../frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment:** Create a `.env` file:
   ```env
   VITE_API_URL=http://localhost:5000/api
   VITE_OPENAI_API_KEY=your_openai_api_key
   VITE_GEMINI_API_KEY=your_gemini_api_key
   ```
4. **Start the frontend:**
   ```sh
   npm run dev
   ```

---

## Deployment

### Backend (Render)
- Deploy the backend to Render.
- Set environment variables in the Render dashboard.
- Example backend URL: `https://study-helper-m0zo.onrender.com`

### Frontend (Vercel)
- Deploy the frontend to Vercel.
- Set `VITE_API_URL` in Vercel dashboard to your backend URL.
- Add a `vercel.json` file for SPA routing:
  ```json
  {
    "rewrites": [
      { "source": "/((?!.*\\..*).*)", "destination": "/" }
    ]
  }
  ```

---

## API Endpoints

### Auth
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login
- `GET /api/auth/profile` — Get user profile (protected)
- `PUT /api/auth/profile` — Update profile (protected)
- `GET /api/auth/usage` — Get usage stats (protected)

### Study Features
- `POST /api/ai/chat` — AI chat
- `POST /api/ai/quiz` — Generate quiz
- `POST /api/ai/flashcards` — Generate flashcards
- `POST /api/ai/summarize` — Summarize PDF
- Other endpoints for chat, study sessions, etc.

---

## Environment Variables

### Backend
- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — JWT secret key
- `JWT_EXPIRES_IN` — JWT expiration (e.g., 7d)
- `OPENAI_API_KEY` — OpenAI API key
- `GEMINI_API_KEY` — Gemini API key

### Frontend
- `VITE_API_URL` — Backend API base URL
- `VITE_OPENAI_API_KEY` — OpenAI API key (if used client-side)
- `VITE_GEMINI_API_KEY` — Gemini API key (if used client-side)

---

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## License
MIT

---

## Contact
- Author: Satyam Prajapati
- GitHub: [satyam0777](https://github.com/satyam0777)
- Live Demo: [https://study-helper-six.vercel.app/](https://study-helper-six.vercel.app/)
