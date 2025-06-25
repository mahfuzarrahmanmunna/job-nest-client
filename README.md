# 🧑‍💼 Freelancing Task Marketplace
<img src="https://i.ibb.co/PGFG5qJf/image.png" alt="banner image"/>

A professional freelance task marketplace connecting clients with freelancers for short-term tasks, project bids, and more.

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
- React Router DOM
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

### Backend Packages

| Package         | Purpose                                     |
|------------------|---------------------------------------------|
| `express`        | Web server framework                        |
| `cors`           | Cross-origin requests                       |
| `dotenv`         | Environment variable support                |
| `mongodb`        | MongoDB driver                              |
| `nodemon`        | Auto-restart server during development      |
| `body-parser`    | Parses incoming requests                    |
| `helmet`         | Secure HTTP headers                         |
| `morgan`         | Logs HTTP requests                          |
| `cookie-parser`  | Handles cookies                             |
| `bcryptjs`       | Password hashing (if manual auth)           |
| `jsonwebtoken`   | Auth token handling (if not using Firebase) |

---

## ⚙️ Local Setup Instructions

### Prerequisites

- Node.js installed
- MongoDB (local or cloud)
- Firebase project set up

### 1. Clone the repo

```bash
