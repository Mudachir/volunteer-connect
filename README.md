## 👐 Volunteer-Connect

A platform that helps volunteers connect with organizations and find opportunities to contribute to meaningful causes.

---

## 📌 Project Overview

🚀 This is a **full-stack web application** built using:

- 🖥 **Frontend:** React.js + Tailwind CSS
- ⚙ **Backend:** Spring Boot
- 🗄 **Database:** Oracle (ORDBMS)

---

## ✅ Features Implemented

✔ **Login Page**  
✔ **Signup Page**  
✔ **Home Page**  
✔ **Profile Page (Dashboard)**  

🔜 More features like **volunteer event management** and **API integration** will be added step by step.

---

## 📌 Technologies Used

| 🛠 Technology | 📌 Purpose |
|-------------|---------|
| **React.js**  | Frontend framework |
| **Tailwind CSS**  | UI styling |
| **Spring Boot (Planned)**  | Backend framework |
| **Oracle Database (ORDBMS) (planned)**  | Stores user data |
| **JWT (Planned)**  | Secure authentication |

---

## 📌 Database Schema

The database follows an **ORDBMS structure**, using **objects and nested tables**.

### 📂 Users Table

| Column | Type | Description |
|--------|------|------------|
| `id` | NUMBER (Primary Key) | Unique ID for each user |
| `email` | VARCHAR2(255) | Unique email (Primary Key) |
| `name` | Full_Name | User's full name (Object Type) |
| `gender` | VARCHAR2(10) | Gender (Male/Female/Other) |
| `password_hash` | VARCHAR2(255) | Hashed password |
| `date_of_birth` | DATE | Date of birth |
| `phone_number` | VARCHAR2(20) | Contact number |
| `profile_picture` | VARCHAR2(255) | Profile image URL |
| `present_address` | Address_Type | Current address (Object Type) |
| `permanent_address` | Address_Type | Permanent address (Object Type) |
| `skills` | SkillList | List of skills (Nested Table) |
| `causes_supported` | CauseList | Causes user supports (Nested Table) |
| `volunteer_history` | VolunteerHistoryList | Volunteer participation history (Nested Table) |
| `created_at` | TIMESTAMP | Timestamp of account creation |
| `updated_at` | TIMESTAMP | Timestamp of last update |

---

## 📌 Setup Instructions

```sh
# 1. Clone the Repository
gh repo clone Mudachir/volunteer-connect
cd volunteer-connect

# 2. Install Frontend Dependencies
cd frontend
npm install

# 3. Install Backend Dependencies
cd ../backend
mvn clean install
```
---

## 📌 Future Improvements

🔹 **Connect the backend to the frontend** (REST API integration)  
🔹 **Implement JWT-based authentication**  
🔹 **Volunteer event listing & participation feature**  
🔹 **Dashboard analytics for user activity**  

---

### ⭐ If you like this project, don't forget to give it a star on GitHub! 🌟

