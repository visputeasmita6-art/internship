// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
// {/* App component is rendered inside the StrictMode wrapper, which helps identify potential problems in the application during development. It activates additional checks and warnings for its descendants, ensuring that the app adheres to best practices and avoids deprecated features. This setup is essential for maintaining code quality and improving the overall stability of the React application. */}
//   </StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);