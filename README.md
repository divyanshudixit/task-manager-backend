# Task Manager Backend

This is the backend for the Task Manager application. It provides RESTful APIs for managing tasks, users, and authentication.

## Getting Started

These instructions will guide you through setting up and running the backend server on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 12 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (either local or a cloud instance like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

1. **Download the zip file and extract it.**

   Alternatively, if you have Git installed, you can clone the repository:
   ```sh
   git clone https://github.com/your-username/task-manager-backend.git
   ```
2. **Extract the zip file:**
   - Extract the downloaded zip file to your desired location.

3. **Navigate to the project directory:**
   ```sh
   cd task-manager-backend
   npm i
   ```
### Configuration
Create a .env file in the root directory of the project and add the following environment variables:
```sh
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
```
## Starting the App

Once the dependencies are installed, you can start the development server:

```sh
npm run dev
```
## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing task and user data.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **JWT**: For secure user authentication.
