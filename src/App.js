import "./App.css";
import Home from "./components/home/Home";
import Log_in from "./components/log_in/Log_in";
import Register from "./components/register/Register";
import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/log_in",
    element: <Log_in />,
  },
  // {
  //   path: "/services",
  //   element: <Services />,
  // },
  {
    path: "/log_in/register",
    element: <Register />,
  },
]);

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
      <RouterProvider
        router={router}
        showPassword={showPassword}
        handleChange={handleChange}
        togglePasswordVisibility={togglePasswordVisibility}
      />
    </div>
  );
}

export default App;
