
# **Job Posting Board with Email Automation**

A full-stack MERN application that allows companies to register, verify their accounts, post job listings, and automate email notifications to candidates. This project demonstrates the use of modern web development techniques, including email automation using Nodemailer, user authentication with JWT, and a fully responsive frontend design.

### **Live Demo**
[Deployed Frontend on Vercel/Netlify](#)  
[Deployed Backend on Render/Heroku](#)

---

## **Table of Contents**
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)

---

## **Features**
### 1. **User Registration and Email Verification**
   - Companies can register by providing essential details like email, password, and phone number.
   - Email verification is required to activate the account.
   
### 2. **Login and Authentication**
   - Login functionality with JWT-based authentication to ensure secure access.
   - Auto-login upon successful registration.

### 3. **Job Posting**
   - Authenticated companies can post job listings with job title, description, experience level, candidate emails, and more.
   - Jobs are visible only to the posting company for privacy.

### 4. **Email Automation**
   - Companies can send job notifications to candidates directly from the platform using Nodemailer.
   - Emails include job details, sender information, and a personalized message.

### 5. **Logout**
   - Secure logout by clearing JWT tokens.

---

## **Tech Stack**

**Frontend**:  
- React.js
- React Router
- Axios

**Backend**:  
- Node.js
- Express.js
- Nodemailer for Email Automation

**Database**:  
- MongoDB (MongoDB Atlas)

**Authentication**:  
- JWT (JSON Web Tokens)

---

## **Screenshots**
![Company Registration](#)  
*Company Registration Form*

![Job Posting Form](#)  
*Job Posting Interface*

![Job Email](#)  
*Automated Job Email Example*

---

## **Installation**

### 1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/job-posting-board.git
cd frontend
```

### 2. **Backend Setup**
```bash
cd backend
npm install
```

- **Set up environment variables:**
  Create a `.env` file in the `backend` directory with the following:
  ```bash
  MONGO_URI=<your-mongodb-uri>
  JWT_SECRET=<your-jwt-secret>
  EMAIL=<your-email>
  PASSWORD=<your-email-password>
  ```

- **Run the backend server:**
  ```bash
  npm start
  ```

### 3. **Frontend Setup**
```bash
cd ../frontend
npm install
```

- **Run the React app:**
  ```bash
  npm run dev
  ```

---

## **Usage**

1. **Company Registration**:  
   - Navigate to `/register` to create a company account.
   - A verification email will be sent to the registered email. Verify the account to activate it.

2. **Login**:  
   - Once verified, login using `/login` to access the dashboard.

3. **Post a Job**:  
   - After login, you can navigate to `/post-job` to post a new job listing.

4. **Send Job Emails**:  
   - You can send job notifications via email to candidates from the job posting page.

---

## **API Endpoints**

| Method | Endpoint               | Description                                |
|--------|------------------------|--------------------------------------------|
| POST   | `/api/register`         | Register a new company                     |
| POST   | `/api/login`            | Login a company and generate JWT           |
| POST   | `/api/job`              | Create a new job posting (protected route) |
| POST   | `/api/send-email`       | Send job notification emails to candidates |
| GET    | `/api/verify-email/:id` | Verify email account                       |

---

## **Project Structure**

```bash
├── job-board-client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── index.js
├── job-board-server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── app.js
│   └── server.js
├── README.md
└── .env
```

---

### **Video Demonstration**
[Watch the project demo on Loom](#)
