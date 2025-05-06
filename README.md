# Full-Stack To-Do Application

A modern, feature-rich to-do application built with React and Node.js, featuring a clean Material-UI interface and robust backend API.

## 🚀 Features

- User authentication and authorization
- Create, read, update, and delete to-do items
- Responsive Material-UI design
- RESTful API with Swagger documentation
- PostgreSQL database with Sequelize ORM
- Session-based authentication
- Cross-Origin Resource Sharing (CORS) enabled

## 🛠️ Tech Stack

### Frontend
- React
- Material-UI
- React Router v7
- Axios for API calls
- Emotion for styled components

### Backend
- Node.js with Express
- PostgreSQL database
- Sequelize ORM
- Swagger for API documentation
- bcrypt for password hashing
- Express session for authentication
- CORS enabled

## 📋 Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn package manager

## 🚀 Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=localhost
   DB_PORT=5432
   SESSION_SECRET=your_session_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

The backend server will run on `http://localhost:3000` by default.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend application will run on `http://localhost:3001` by default.

## 📚 API Documentation

Once the backend server is running, you can access the Swagger API documentation at:
```
http://localhost:3000/api-docs
```