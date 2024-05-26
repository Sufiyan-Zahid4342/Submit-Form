import "./App.css";
import Login from "./Views/Login";

import { Routes, Route } from "react-router-dom";
import Register from "./Views/Register";
import Dashboard from "./Views/Dashboard";
import { useState } from "react";
import Header from "./components/header";
import { UserContext } from "./context/userContext";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorage.getItem("user"));

  return (
    <div>
      <UserContext.Provider value={[isLoggedin, setIsLoggedIn]}>
        <Routes>
          {isLoggedin ? (
            <Route path="/">
              <Route
                path="/"
                index
                element={<Dashboard setIsLoggedIn={setIsLoggedIn} />}
              />
            </Route>
          ) : (
            <>
              <Route
                path="/"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/register" element={<Register />} />
            </>
          )}
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
