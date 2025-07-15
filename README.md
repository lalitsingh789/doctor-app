# 🏥 Doctrinix - Doctor Appointment Booking App

Doctrinix is an Reactive Native Application smart and user-friendly **doctor appointment booking** app designed to simplify healthcare access for patients. It offers seamless booking, browsing doctors by department, viewing doctor profiles, and managing appointments securely.

---

## 🚀 Features

- 📲 User Sign Up and Login (secure auth)
- 🔍 Browse doctors by department
- 🧑‍⚕️ View doctor profile with expertise & reviews
- 📅 Book an appointment for specific date and time
- 📖 Booking history with past & upcoming visits
- 🛡 Secure backend with MongoDB & Express
- ⚙️ Role-based access (Admin & User Support - optional)

## 📱 Screenshots (Column View)

| Splash Screen | Onboarding Screen |  |
|----------------|--------------------|--|
| <img src="https://github.com/user-attachments/assets/01be45a7-cca2-4237-b4a8-cbeadb157501" width="200"/> | <img src="https://github.com/user-attachments/assets/3300276a-ccb3-49b7-bda9-5e8405b2a74c" width="200"/> |  |

| Login Screen | Home Screen | Doctor Profile |
|--------------|-------------|----------------|
| <img src="https://github.com/user-attachments/assets/c1bfd9bb-1403-48cc-83bc-68a3fd3f8f19" width="200"/> | <img src="https://github.com/user-attachments/assets/73e5442e-999f-4811-84cb-2674934c38ad" width="200"/> | <img src="https://github.com/user-attachments/assets/c6c5f440-ef4e-444f-8736-bd4fc54c28d5" width="200"/> |

| Booking Screen | My Appointments | Signup Screen |
|----------------|------------------|-----------------|
| <img src="https://github.com/user-attachments/assets/ff8fbee9-d587-4481-930f-13fa9680c3ec" width="200"/> | <img src="https://github.com/user-attachments/assets/ead6e2a9-bcdc-4ef2-89ce-194c3a9d39da" width="200"/> | <img src="https://github.com/user-attachments/assets/826b7c94-5b8a-4118-aae7-e8ea70caf175" width="200"/> |

| Saved Doctors | Profile Screen | Edit Profile |
|----------------|----------------|----------------|
| <img src="https://github.com/user-attachments/assets/75bb43b8-6287-490b-9c03-74c51fe069ac" width="200"/> | <img src="https://github.com/user-attachments/assets/bb0d5da4-156d-46c7-a745-90218af9d31c" width="200"/> | <img src="https://github.com/user-attachments/assets/6d627fb4-d68c-439e-b284-043a4a5c3969" width="200"/> |

| Medicine Book | Medicine Cart | Doctor List |
|----------------|----------------|----------------|
| <img src="https://github.com/user-attachments/assets/b35fc8f3-f58d-4b35-81c0-93db2f99c225" width="200"/> | <img src="https://github.com/user-attachments/assets/ef4883df-d07b-413e-b94a-f7424791403d" width="200"/> | <img src="https://github.com/user-attachments/assets/ad0a5365-fbbe-49de-b0d5-6d8909f0df13" width="200"/> |

---



## 🛠 Tech Stack

### Frontend (React Native)
- React Native (Expo CLI)
- React Navigation
- Axios
- Context API

### Backend (Node.js + Express)
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## 📁 Folder Structure
```bash
doctor-app/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── server.js
├── frontend/
│ ├── screens/
│ ├── components/
│ ├── navigation/
│ └── App.js
```

---

## 🧰 Installation & Setup

### Backend Setup

```bash
cd backend
npm install
node server.js
```
💡 Make sure you set your MongoDB URI in .env or directly in server.js

```bash
cd frontend
npm install
npx expo start
```
🌐 MongoDB

Hosted on MongoDB Atlas

Database: Doctrinix

Collections: users, doctors, bookings

<img src="https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" width="180"/>

## 🤝 Contributing
We welcome contributions! Feel free to fork the repo, create pull requests, or raise issues.

```bash
git clone https://github.com/yourusername/doctor-app.git
```
## 📜 License

This project is licensed under the [MIT License](./LICENSE).

## 📧 Contact
For any queries or collaborations:

Email: yourname@example.com

GitHub: @lalitsingh789
