# Movie App

## Demo
https://movie-app-ruby-pi.vercel.app/



## Project Gif


## Project Purpose

The Movie App is a movie application that allows users to browse, search, and view detailed information about movies. The app features user authentication via Firebase, a dark/light mode toggle, and the use of Toastify for notifications. This project was developed to enhance skills in using React, Context API for state management, Tailwind CSS for styling, and React Router for navigation.

## Project Structure

movie-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── auth/
│   │   └── firebase.jsx
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
│   │   └── Switch.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── MovieProvider.jsx
│   ├── helpers/
│   │   └── ToastNotify.js
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Main.jsx
│   │   ├── MovieDetail.jsx
│   │   ├── Movies.jsx
│   │   └── Register.jsx
│   ├── router/
│   │   ├── AppRouter.jsx
│   │   └── PrivateRouter.jsx
│   ├── App.css
│   ├── App.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
└── yarn.lock

## Project Features

- **User Authentication**: Implemented using Firebase. Users must log in to access movie details. Unauthorized users are redirected to the login page.
- **Movie Search and Filtering**: Users can search for movies by name and category. Data is fetched from an API.
- **Movie Details**: After selecting a movie, users can view detailed information, including cast, release date, and ratings.
- **Dark/Light Mode**: Users can toggle between dark and light themes.
- **Toast Notifications**: Instant notifications for actions like login success or error handling.
- **State Management**: Context API is used to manage global state, including authentication and movie data.
- **Routing**: React Router is used for navigation between different pages. The `PrivateRouter` component ensures protected routes.

## Technologies Used

- **ReactJS**: For building the user interface.
  - **useState**: For managing local state within components.
  - **useContext**: For accessing global state provided by the Context API.
- **Tailwind CSS**: For styling the application with utility-first CSS classes.
- **Firebase**: For user authentication and data management.
- **Toastify**: For displaying toast notifications.
- **Context API**: Used for managing global state across the application.
- **React Router**: For routing and navigation within the application.
- **Responsive Design**: The application is fully responsive and optimized for various devices, from mobile phones to desktops.

## API

The application fetches movie data from an external API. Example endpoint:

- [Movie API Endpoint](https://api.themoviedb.org/3/movie/550?api_key=${API_KEY})

## Outcome

Through this project, I enhanced my skills in the following areas:

- Utilizing **Tailwind CSS** for efficient and responsive styling.
- Implementing **state management** using Context API.
- Handling **authentication and authorization** in a React application with Firebase.
- Using **React Router** for seamless navigation and protected routes.
- Displaying **notifications** using Toastify.

These skills are essential for developing dynamic and user-friendly React applications.

<p align="center"> 📝 Happy Coding! 🎬 </p>
