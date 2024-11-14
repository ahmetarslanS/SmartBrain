# Smart Brain - Frontend

This is the frontend of the **Smart Brain** application. It allows users to register, sign in, view their profiles, and upload images for face detection. The project is designed to recognize faces in images using a Clarifai API, with user authentication and entry tracking. Built with **React.js**, and **CSS** for a responsive and interactive user interface. The frontend communicates with the backend API for face detection and user management.

## Demo

You can view the live demo [here](https://smart-brain-frontend-29200474981c.herokuapp.com/).

## Tech Stack
### Frontend
- **React.js**: JavaScript library for building user interfaces.
- **React Hooks**: For managing component state and lifecycle methods.
- **CSS**: For styling the user interface.
### Backend
- **Node.js**: JavaScript runtime environment used for server-side scripting.
- **Express**: Web framework for building the API.
- **PostgreSQL**: Relational database used for storing user data and image entries.
- **Clarifai API**: For face detection functionality.
- **Knex.js**: SQL query builder for interacting with the PostgreSQL database.
- **bcrypt-nodejs**: Library for password hashing.
- **CORS**: Middleware for enabling cross-origin requests.

## Features

- **User Authentication**: Allows users to register, sign in, and view their profiles.
- **Face Detection**: Lets users upload images and detect faces using Clarifai API.
- **Responsive UI**: Designed to be user-friendly with a clean, modern interface.
- **State Management**: Managed using React's built-in state and hooks (e.g., `useState`, `useEffect`).


## Installation

### Prerequisites

- **Node.js** and **npm** should be installed on your system.

### Steps to Run the Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/ahmetarslanS/SmartBrain
   cd smartbrain-frontend

2. Install the required dependencies:
    ```bash
    npm install

3. Start the development server:
    ```bash
    npm start

The frontend will be available at http://localhost:3000.

## API Integration

The frontend communicates with the backend using the following API endpoints:

- `POST /signin`: To sign in a user.
- `POST /register`: To register a new user.
- `GET /profile/:id`: To fetch the user profile.
- `POST /imageurl`: To send image URLs to the backend for face detection.

## Deployment

To deploy this frontend:

1. Set up the backend as described in the [Backend README](https://github.com/ahmetarslanS/SmartBrain-API).

2. Build the production-ready frontend:

    ```bash
    npm run build

3. Deploy the build folder to your cloud server (e.g., AWS, Netlify, Vercel).

## Contributing

Feel free to fork the repository and submit pull requests for improvements, bug fixes, or new features.

## License

This project is licensed under the MIT License

