# Mini Event Finder

A full-stack event discovery platform where users can create, browse, and view event details.  
**Backend:** Node.js + Express | **Frontend:** React

---

## 🔍 Project Overview

Mini Event Finder is a portfolio-ready project demonstrating a complete full-stack workflow: API design, backend development, frontend integration, and deployment.  
It’s ideal for showcasing your ability to build, connect, and deliver a working web app fast.

**Key Features:**  
- Create new events — title, description, location, date, maxParticipants, currentParticipants  
- List all existing events  
- View details of a specific event  
- Simple UI for listing, creation, and detail views  
- Modular folder structure and clean codebase  
- Backend REST API, frontend consumes endpoints  
- Fast setup, deployment-ready

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express  
- **Frontend:** React (optionally with Redux/hooks)  
- **Storage:** In-memory array (upgradeable to MongoDB for persistence)  
- **Styling:** CSS, (or Tailwind/Bootstrap)  
- **Deployment:** Example: Vercel/Netlify (frontend), Render/Railway (backend)

---

## 📦 API Endpoints

### `POST /api/events`  
Create a new event  
**Request body:**

### `GET /api/events`  
List all events  
*(Optionally: add query params for search or filtering in the future)*

### `GET /api/events/:id`  
Get details for a specific event  
**Response sample:**
{
"title": "Community Meetup",
"description": "Discuss MERN projects",
"location": "Bangalore, India",
"date": "2025-11-15T10:00:00Z",
"maxParticipants": 50,
"currentParticipants": 0
}

### `GET /api/events`  
List all events  
*(Optionally: add query params for search or filtering in the future)*

### `GET /api/events/:id`  
Get details for a specific event  
**Response sample:**
{
"id": "abcd1234",
"title": "Community Meetup",
"description": "Discuss MERN projects",
"location": "Bangalore, India",
"date": "2025-11-15T10:00:00Z",
"maxParticipants": 50,
"currentParticipants": 5
}

---

## 🖥️ Running Locally

**Backend**
cd Server
npm install
nodemon server.js
or node server.js
API will be at http://localhost:3000

**Frontend**
cd Ui
npm install
npm run dev
UI runs at http://localhost:5173 (or your configured port).

*Ensure frontend API base URL matches your backend startup URL.*

---

## 📂 Project Structure (Suggested)
![Project Structure](image.png)

---



## 🧾 What I Learned & Challenges

- Designing REST endpoints; integrating with a React UI  
- Managing state (loading, error, data) in React  
- Structuring code for fast iteration  
- Deploying both backend & frontend and setting env configs  
- Leveraging AI tools (ChatGPT, Copilot) for scaffolding, then refining/debugging

---

## 📬 Author

**Ravi Tharun**  
📍 Bengaluru, India  
📧 [tharunravi672@gmail.com](mailto:tharunravi672@gmail.com)

---

## 🔗 GitHub Profile

[https://github.com/your-github-profile](https://github.com/your-github-profile)

---

## 🏁 Next Steps

- Polish UI/UX and ensure mobile responsiveness  
- Add form validation + UI feedback  
- Bonus features if time allows  
- Clean commit history, push to GitHub  
- Deploy both frontend & backend, add live links

---

Thank you for exploring this repository!  
Feel free to run the project locally and see how everything fits. ⭐️

---
