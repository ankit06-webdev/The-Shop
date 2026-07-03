# 🛒 The Shop - B2B Live Catalog

A dynamic B2B wholesale catalog web application built for daily needs and FMCG distribution. This project demonstrates full-stack interaction by fetching live inventory data from an Express backend and seamlessly rendering it on a React frontend.

## ✨ Key Features
* **Dynamic Data Fetching:** Utilizes modern `async/await` and Fetch API to retrieve inventory data from the backend.
* **Conditional Rendering:** Smart UI that automatically disables the "Add to Cart" button and displays "Out of Stock" when product inventory reaches zero.
* **Responsive Grid Layout:** Beautiful, card-based product mapping built with standard CSS / Tailwind CSS.
* **RESTful API:** Custom Node.js/Express backend serving JSON data securely with CORS enabled.

## 🛠️ Tech Stack
* **Frontend:** React.js, HTML, CSS (Tailwind)
* **Backend:** Node.js, Express.js
* **Concepts Used:** REST APIs, React Hooks (`useState`, `useEffect`), Asynchronous JavaScript, Cross-Origin Resource Sharing (CORS).

## 🚀 How to Run This Project Locally

### 1. Start the Backend
Open a terminal, navigate to the backend folder, and run:
```bash
cd backend
npm install
node server.js

### 2. Start the Frontend 
Open a terminal, navigate to the backend folder, and run:
cd frontend
npm install
npm run dev