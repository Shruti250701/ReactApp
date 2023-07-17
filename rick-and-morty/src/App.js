import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import React from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Login handleLogin={handleLogin} />}
    </div>
  );
};

export default App;
