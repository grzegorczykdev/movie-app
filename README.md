# 🎬 Movie App

A modern **movie discovery app** built with **React**, **Tailwind CSS**, and **Appwrite**, designed to help users find their next favorite movie effortlessly. This project demonstrates proficiency in asynchronous JavaScript, API integration, and responsive UI design.

[🌐 Live Demo](https://grzegorczykdev.github.io/movie-app/)

---

## 🌟 Features

- **Search Movies** – Find movies in real-time as you type.
- **Trending Movies** – See the most popular movies fetched from Appwrite.
- **Debounced Search** – Optimized API calls with 500ms debounce to improve performance.
- **Responsive Design** – Fully responsive on mobile and desktop devices.
- **Error Handling** – Friendly messages for network errors or empty search results.
- **Async Functions & API Calls** – Uses asynchronous JavaScript (`async/await`) to handle data fetching efficiently.

---

## 🛠 Technologies & Tools

- **React** – Interactive UI components and state management with hooks.
- **Tailwind CSS** – Utility-first CSS framework for modern, responsive styling.
- **Vite** – Fast development and build tool for modern React apps.
- **Appwrite** – Backend service to store trending movies and track search counts.
- **react-use (useDebounce)** – Debouncing user input to reduce unnecessary API calls.
- **TMDb API** – Reliable source for movie data, search, and detailed movie information.
- **Asynchronous JavaScript (`async/await`)** – For smooth data fetching and error handling.
- **GitHub Pages** – Hosting the live version of the application.

---

## ⚙ How It Works

1. **Trending Movies**: On app load, trending movies are fetched from **Appwrite** and displayed in a dedicated section.
2. **Movie Search**: Users type in the search bar. Input is **debounced** to limit API requests.
3. **API Integration**: Searches are performed using the **TMDb API**, fetching movie data asynchronously.
4. **Search Count Tracking**: When a user searches for a movie, the first search result is saved in **Appwrite** to track search popularity.
5. **Movie Display**: Reusable **MovieCard** components display movie posters, titles, and other details.
6. **Loading & Error States**: Implemented spinners during loading and clear error messages for network or API issues.

---

## 📚 Lessons Learned & Highlights

- **API Integration**: Learned to fetch data from TMDb API efficiently, handling authentication and query parameters.
- **Asynchronous Programming**: Mastered `async/await` patterns, error handling, and race conditions in React.
- **Debouncing Inputs**: Reduced unnecessary API calls using `react-use`’s `useDebounce`.
- **State Management**: Managed multiple state variables, including loading and error states, using React hooks.
- **Responsive Design**: Applied **Tailwind CSS** to build a visually appealing, responsive interface.
- **Backend Integration**: Connected front-end to **Appwrite** for persistent trending data and search analytics.
- **User Experience**: Focused on smooth UX with loading spinners, error messages, and clean UI layout.

---

Made with ❤️ by [GrzegorczykDev](https://github.com/grzegorczykdev)
