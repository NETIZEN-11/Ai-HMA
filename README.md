# AI Home Maintenance Assistant

AI Home Maintenance Assistant is a full-stack application that helps users manage their home appliances and monitor maintenance needs.

Users can register, log in securely, and add appliances to keep track of their home devices. The system is built with a Node.js backend and a React Native mobile application.

---

## Features

* User Registration and Login
* JWT Based Authentication
* Protected API Routes
* Add and Manage Home Appliances
* REST API Backend
* Mobile App Integration

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

### Mobile App

* React Native
* Expo
* Axios

---

## Project Structure

```
AI-HMA
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
├── mobile-app
│
└── docs
```

---

## API Endpoints

### Register User

POST /api/auth/register

Example Request

```
{
"name": "Nitish",
"email": "nitish@gmail.com",
"password": "123456"
}
```

---

### Login User

POST /api/auth/login

Example Request

```
{
"email": "nitish@gmail.com",
"password": "123456"
}
```

---

### Add Appliance

POST /api/appliances

Headers

```
Authorization: Bearer <token>
```

Example Request

```
{
"name": "Washing Machine",
"brand": "LG"
}
```

---

### Get Appliances

GET /api/appliances

Headers

```
Authorization: Bearer <token>
```

---

## Setup Instructions

Clone the repository

```
git clone https://github.com/NETIZEN-11/Ai-HMA.git
```

Go to backend folder

```
cd backend
```

Install dependencies

```
npm install
```

Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
```

Run the server

```
npm run dev
```

---

## Future Improvements

* AI based appliance fault detection
* Maintenance reminders
* Image upload for appliances
* Service technician support

---

## Author

Nitesh Kumar
Computer Science Student
