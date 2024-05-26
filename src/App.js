import "./App.css";
import Login from "./Views/Login";

import { Routes, Route } from "react-router-dom";
import Register from "./Views/Register";
import Dashboard from "./Views/Dashboard";
import { useState } from "react";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(localStorage.getItem("user"));

  return (
    <div>
      <Routes>
        {isLoggedin ? (
          <Route path="/" element={<Dashboard />} />
        ) : (
          <>
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
