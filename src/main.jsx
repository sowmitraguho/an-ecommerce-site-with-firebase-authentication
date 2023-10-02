import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContexts from "./Contexts/UserContexts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContexts>
      <App />
    </UserContexts>
  </React.StrictMode>
);
