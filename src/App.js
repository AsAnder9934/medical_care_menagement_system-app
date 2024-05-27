import "./App.css";
import Home from "./components/home/Home";
import Log_in from "./components/log_in/Log_in";
import Register from "./components/register/Register";
import Services from "./components/services/Services";
import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Services_patients from "./components/services_patients/Services_patients";
import Services_hospitals from "./components/services_hospitals/Services_hospitals";
import Services_staff from "./components/services_staff/Services_staff";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/log_in",
    element: <Log_in />,
  },
  {
    path: "/log_in/services",
    element: <Services />,
  },
  {
    path: "/log_in/register",
    element: <Register />,
  },
  {
    path: "/log_in/services/patients",
    element: <Services_patients />,
  },
  {
    path: "/log_in/services/hospitals",
    element: <Services_hospitals />,
  },
  {
    path: "/log_in/services/staff",
    element: <Services_staff />,
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
