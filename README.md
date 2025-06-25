# 🧑‍💼 Freelancing Task Marketplace
<img src="https://i.ibb.co/PGFG5qJf/image.png" alt="banner image"/>

A professional freelance task marketplace connecting clients with freelancers for short-term tasks, project bids, and more.

---

## 🧾 Description

**Freelancing Task Marketplace** is a modern web application that connects clients with freelancers to accomplish short-term tasks and project-based work. The platform allows clients to post jobs, set deadlines, and receive bids from freelancers. Freelancers can browse tasks, apply with bids, and manage their submissions. Built with a powerful **MERN stack** (React, Node.js, Express, MongoDB) and styled using **Tailwind CSS + DaisyUI**, this project features smooth animations, real-time updates, and a fully responsive design — ideal for showcasing practical skills in task management, user roles, and deadline-driven workflows.

---

## 🌐 Live Site

[🔗 Visit Live Website](https://jobnest-a10.web.app/)

---

## ✨ Key Features

- 🔍 **Task Browsing**: Clients can browse and search for posted tasks.
- 🧑‍💼 **User Roles**: Separate functionality for Clients and Freelancers.
- 📝 **Task Posting**: Clients can create and post new freelance tasks.
- ⏰ **Featured Tasks**: Auto-sorted tasks with upcoming deadlines appear on the homepage.
- 🎨 **Responsive Design**: Fully responsive UI using Tailwind CSS and DaisyUI.
- 🔐 **Firebase Authentication**: Login via email/password and third-party providers.
- 🧭 **Dynamic Routing**: Seamless page transitions with React Router.
- 🖼️ **Banner Slider**: Interactive hero section with Swiper JS.
- 🌟 **Framer Motion Animations**: Smooth page transitions and scroll animations.
- 📅 **Deadline Handling**: Displays time-sensitive tasks based on `formateDate`.

---

## 🛠️ Technologies Used

### Frontend

- React
- React Router 
- Firebase Auth
- Axios
- Tailwind CSS
- DaisyUI
- Framer Motion
- SwiperJS
- React Icons

### Backend

- Express.js
- MongoDB
- Node.js
- Dotenv
- CORS
- Body Parser
- Helmet
- Morgan

---

## 📦 NPM Packages Used

### Frontend Packages

| Package              | Purpose                                        |
|----------------------|------------------------------------------------|
| `react`              | Core UI library                                |
| `react-dom`          | DOM rendering for React                        |
| `react-router-dom`   | Client-side routing                            |
| `axios`              | HTTP requests                                  |
| `firebase`           | Authentication & Firestore                     |
| `tailwindcss`        | Utility-first CSS framework                    |
| `daisyui`            | Tailwind UI components                         |
| `framer-motion`      | Motion & animation                             |
| `swiper`             | Sliders for banners                            |
| `react-icons`        | Icon library                                   |
| `react-hot-toast`    | Toast notifications                            |
| `date-fns` / `moment`| Date formatting                                |
| `clsx` / `classnames`| Conditional class handling                     |
| `react-hook-form`    | Form state management                          |
| `zod` or `yup`       | Schema validation for forms (optional)         |

---

## ⚙️ Local Setup Instructions

### Prerequisites

- Node.js installed
- MongoDB (local or cloud)
- Firebase project set up
- Backend API server (see below)

### 1. Clone the Repository

```bash
git clone https://github.com/mahfuzarrahmanmunna/job-nest-client.git
cd freelancing-task-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add `.env` File

```env
VITE_API_URL=http://localhost:3000
VITE_FIREBASE_API_KEY=your_firebase_key
# Add other required Firebase configs here
```

### 4. Start the Development Server

```bash
npm run dev
```

---

## 🧪 Backend API Endpoints (Express + MongoDB)

Your frontend communicates with these endpoints via `VITE_API_URL`:

### 🔐 `/users` Endpoints

| Method | Route        | Description                     |
|--------|--------------|---------------------------------|
| GET    | `/users`     | Get all users                   |
| POST   | `/users`     | Add a new user                  |
| PATCH  | `/users`     | Update user login time          |

### 📋 `/tasks-nest` Endpoints

| Method | Route                 | Description                             |
|--------|-----------------------|-----------------------------------------|
| GET    | `/tasks-nest`         | Get all tasks                           |
| GET    | `/tasks-nest/sorted`  | Get latest 6 tasks                      |
| GET    | `/tasks-nest/:id`     | Get task by ID                          |
| POST   | `/tasks-nest`         | Add a new task                          |
| PUT    | `/tasks-nest/:id`     | Update entire task                      |
| PATCH  | `/tasks-nest/:id`     | Update bids field only                  |
| DELETE | `/tasks-nest/:id`     | Delete a task                           |

> Make sure your backend is running on `http://localhost:3000` or update `VITE_API_URL` in `.env`.

---

## 🤝 Author

- **Md. Mahfuzar Rahman Munna**  
- GitHub: [@mahfuzarrahmanmunna](https://github.com/mahfuzarrahmanmunna)
- Email: mdmahfuzarrahmanmunna44@gmail.com
- [LinkedIn Profile](https://www.linkedin.com/in/md-mahfuzar-rahman-munna-41a342351/)

---

> ✨ If this project helped you, give it a ⭐ on GitHub!
