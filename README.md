# 🛒 EverBuy – MERN Stack E-Commerce Web Application

EverBuy is a full-stack E-Commerce web application built using the MERN Stack (MongoDB, Express, React, Node.js).  
This project includes user authentication, product management, cart system, order management, and admin functionality.

Built by: Mehar Sharma  

---

## 🚀 Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router DOM
- Axios
- Bootstrap / Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcrypt.js

---

## ✨ Features

### 👤 User Features
- User Registration & Login
- JWT Authentication
- Browse Products
- Product Details Page
- Add to Cart
- Update / Remove Cart Items
- Place Orders
- Order History
- Responsive UI

### 🛠 Admin Features
- Admin Dashboard
- Add New Products
- Edit Products
- Delete Products
- View All Orders
- Manage Users

---

## 📂 Project Structure

```
EverBuy/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Mehar59/EverBuy.git
cd EverBuy
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

Open new terminal:

```bash
cd frontend
npm install
```

Create `.env` file inside frontend folder:

```
REACT_APP_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm start
```

---

## 🔗 API Endpoints

### User Routes
- POST /api/users/register
- POST /api/users/login
- GET /api/users/profile

### Product Routes
- GET /api/products
- GET /api/products/:id
- POST /api/products (Admin)
- PUT /api/products/:id (Admin)
- DELETE /api/products/:id (Admin)

### Order Routes
- POST /api/orders
- GET /api/orders/myorders
- GET /api/orders (Admin)

---

## 🌍 Deployment

Frontend can be deployed on:
- Vercel
- Netlify

Backend can be deployed on:
- Render
- Railway

Database:
- MongoDB Atlas

---

## 📸 Screenshots

(Add your project screenshots here)

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Mehar Sharma  
GitHub: https://github.com/Mehar59

---

⭐ If you like this project, give it a star on GitHub!
