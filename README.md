# Face Recognition Brain - Frontend

This is the frontend of the **Face Recognition Brain** application. It allows users to register, sign in, view their profiles, and upload images for face detection. The project is designed to recognize faces in images using a Clarifai API, with user authentication and entry tracking. Built with **React.js**, **React-Redux**, and **CSS** for a responsive and interactive user interface. The frontend communicates with the backend API for face detection and user management

## Demo

You can test the web application by visiting [live demo link](#).

## Tech Stack

- **React.js**: JavaScript library for building user interfaces.
- **React-Redux**: State management library to manage the application's state.
- **CSS**: For styling the user interface.
- **Clarifai API**: For face detection functionality via the backend.
- **PostgreSQL**: Database for storing user data (interacts with the backend).

## Features

- **User Authentication**: Allows users to register, sign in, and view their profiles.
- **Face Detection**: Lets users upload images and detect faces using Clarifai API.
- **Responsive UI**: Designed to be mobile-friendly with a clean, modern interface.
- **Dynamic State Management**: Using React-Redux for managing the app's state efficiently.


## Installation

### Prerequisites

- **Node.js** and **npm** should be installed on your system.

### Steps to Run the Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/ahmetarslanS/FaceRecognitionBrain
   cd facerecognitionbrain-frontend

2. Install the required dependencies:
    ```bash
    npm install

3. Start the development server:
    ```bash
    npm start

The frontend will be available at http://localhost:3000.

## API Integration

The frontend communicates with the backend using the following API endpoints:

POST /signin: To sign in a user.
POST /register: To register a new user.
GET /profile/:id: To fetch the user profile.
POST /imageurl: To send image URLs to the backend for face detection.

## Deployment

To deploy this frontend:

1. Set up the backend as described in the backend README.

2. Build the production-ready frontend:

    ```bash
    npm run build

3. Deploy the build folder to your cloud server (e.g., AWS, Netlify, Vercel).

## Contributing

Feel free to fork the repository and submit pull requests for improvements, bug fixes, or new features.

## License

This project is licensed under the MIT License

