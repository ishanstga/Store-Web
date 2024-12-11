# E-Commerce Web Development Project

## Overview
This is a full-stack e-commerce web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The project aims to provide a comprehensive platform for managing products, categories, and user interactions for an online store (Still Under Development).

### Features
- RESTful API development for handling e-commerce functionality.
- Modular backend structure following clean architecture principles.
- Centralized error handling using middleware.
- MongoDB for database storage with well-defined schemas.
- Environment configuration using `.env` file for secure and flexible setups.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: Tailwind CSS (for frontend)

## Project Structure

### Backend Directory Structure
```plaintext
backend/
|-- node_modules/
|-- src/
|   |-- api/
|   |   |-- middleware/
|   |       |-- global-error-handling-middleware.js
|   |   |-- category.js
|   |   |-- product.js
|   |-- application/
|   |   |-- category.js
|   |   |-- product.js
|   |-- domain/
|   |   |-- errors/
|   |       |-- not-found-error.js
|   |-- infrastructure/
|       |-- schemas/
|           |-- category.js
|           |-- product.js
|       |-- db.js
|   |-- app.js
|-- .env
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- README.md
```

### Description of Key Directories and Files

#### **api/middleware/**
- **global-error-handling-middleware.js**: Centralized error-handling logic to ensure consistent error responses.

#### **application/**
- Contains the business logic for managing categories and products.

#### **domain/errors/**
- **not-found-error.js**: Custom error class for handling "not found" errors in the application.

#### **infrastructure/schemas/**
- **category.js & product.js**: Mongoose schemas defining the structure of categories and products in the MongoDB database.
- **db.js**: MongoDB connection setup.

#### **src**
- **app.js**: Main application file for initializing and running the backend server.

## Getting Started

### Prerequisites
- Node.js (v20.17.0)
- MongoDB (cloud setup-Atlas)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ishanstga/Store-Web.git
   ```

2. Install dependencies:
   ```bash
   npm install
   npm install nodemon
   ```

3. Configure the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following:
     ```env
     MONGO_URI=mongodb_connection_string
     ```

4. Start the backend server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:8000` by default.

## API Endpoints

### Categories
- `GET /categories`: Fetch all categories.
- `POST /categories`: Create a new category.
- `PUT /categories/:id`: Update an existing category.
- `DELETE /categories/:id`: Delete a category.

### Products
- `GET /products`: Fetch all products.
- `GET /products/:id`: Fetch specific product.
- `POST /products`: Create a new product.
- `PUT /products/:id`: Update an existing product.
- `DELETE /products/:id`: Delete a product.

## Contribution Guidelines
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License
This project is not licensed so far.


