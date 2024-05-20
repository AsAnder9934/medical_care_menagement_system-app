import "./App.css";
// import Home from "./components/home/Home";
import Services from "./components/services/Services";
import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="App">
      <Services
      // showPassword={showPassword}
      // handleChange={handleChange}
      // togglePasswordVisibility={togglePasswordVisibility}
      />
    </div>
  );
}

export default App;
