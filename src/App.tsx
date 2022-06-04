import * as React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Job from "./pages/Job";
import Layout from "./pages/_Layout";
import Notfound from "./pages/Notfound";
import SignUp from "./pages/SignIn";
import Dashboard from "./pages/dashboards/Dashboard";

export default function App() {
  return (
    <div>
      <Routes>
          {/* <Route path="/dashboard" element={<Layout />}>
            <Route index path="candidate" element={<Home />} />
          </Route> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="jobs" element={<Job />} />
          <Route path="company" element={<Company />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}
