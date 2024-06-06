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
import About from "./components/about/About";
import Map_patients from "./components/map_patients/Map_patients";
import Map_hospital from "./components/map_hospitals/Map_hospital";
import Map_staff from "./components/map_staff/Map_staff";
import Patient_db from "./components/patient_db/Patient_db";
import Hospital_db from "./components/hospital_db/Hospital_db";
import Staff_db from "./components/staff_db/Staff_db";
import Patient_db_dashboard from "./components/patient_db_dashboard/Patient_db_dashboard";
import Hospital_db_dashboard from "./components/hospital_db_dashboard/Hospital_db_dashboard";
import Staff_db_dashboard from "./components/staff_db_dashboard/Staff_db_dashboard";

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
    path: "/about",
    element: <About />,
  },
  {
    path: "/log_in/services",
    element: <Services />,
  },
  {
    path: "/register",
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
  {
    path: "/log_in/services/patients/map",
    element: <Map_patients />,
  },
  {
    path: "/log_in/services/hospital/map",
    element: <Map_hospital />,
  },
  {
    path: "/log_in/services/staff/map",
    element: <Map_staff />,
  },
  {
    path: "/log_in/services/patients/db",
    element: <Patient_db />,
  },
  {
    path: "/log_in/services/hospital/db",
    element: <Hospital_db />,
  },
  {
    path: "/log_in/services/staff/db",
    element: <Staff_db />,
  },
  {
    path: "/log_in/services/patients/db/dashboard",
    element: <Patient_db_dashboard />,
  },
  {
    path: "/log_in/services/hospital/db/dashboard",
    element: <Hospital_db_dashboard />,
  },
  {
    path: "/log_in/services/staff/db/dashboard",
    element: <Staff_db_dashboard />,
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
