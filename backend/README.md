# HostelHub Backend API

This is the core backend for the HostelHub management system, built with Node.js, Express, and MongoDB. It handles authentication, room management, student data, attendance, and more via a RESTful API.

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Security:** JWT (jsonwebtoken), bcryptjs
- **Middleware:** CORS, Express JSON parser

## 🔑 Key Features

- **Authentication:** Secure signup/login for students and admins.
- **Admin APIs:**
  - Create and manage rooms.
  - Assign students to rooms.
  - Track student attendance.
  - Resolve complaints.
- **Student APIs:**
  - View personal room details.
  - Track attendance and percentage.
  - File complaints.
  - Access weekly mess menu.
- **Seeding:** Includes a `seedData.js` script to populate the database with demo data.

## ⚙️ Setup & Configuration

### **1. Environment Variables**
Create a `.env` file in this directory with:

```env
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
PORT=5000
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Database Seeding**
To populate your Atlas cluster with initial sample data:
```bash
npm run seed
```

### **4. Running the Server**
For development (uses nodemon):
```bash
npm run dev
```

For production:
```bash
npm start
```

## 📂 Core Directory Structure

- **config/**: Database connection setup ([db.js](file:///c:/Users/mvbha/OneDrive/Desktop/HOSTELHUBBB/backend/config/db.js)).
- **controllers/**: Business logic for all modules.
- **middleware/**: JWT verification ([authMiddleware.js](file:///c:/Users/mvbha/OneDrive/Desktop/HOSTELHUBBB/backend/middleware/authMiddleware.js)).
- **models/**: Mongoose schemas (User, Room, Attendance, etc.).
- **routes/**: API endpoint routing.
- **seedData.js**: Script to initialize the database with sample data.
- **server.js**: Main entry point for the Express application.
