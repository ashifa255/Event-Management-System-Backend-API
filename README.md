# Event-Management-System-Backend-API
A complete backend API for an Event Management System built with Node.js, Express, MongoDB, and JWT authentication.
## Features

### User Authentication
- User Registration (name, email, password, phoneNumber)
- User Login with JWT and HTTP-only cookies
- Get logged-in user profile
- Update user profile details
- Protected routes with authentication middleware

### Event Management
- Create events with details (title, description, date, time, location, organizer, banner image)
- View all available events
- View single event details
- Update events (only by creator)
- Delete events (only by creator)
- File upload for event banners

## Tech Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) with HTTP-only cookies
- **File Upload**: Multer for handling image uploads
- **Security**: bcryptjs for password hashing
- **Environment Variables**: dotenv for configuration

