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
import { useSelector } from "react-redux";
import { selectLogin } from "./features/login/loginSlice";
import Information from "./pages/dashboards/company/Infomation";
import PostNewJob from "./pages/dashboards/company/PostNewJob";

export default function App() {
  const { user } = useSelector(selectLogin);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="jobs" element={<Job />} />
          <Route path="companies" element={<Company />}></Route>
          <Route path="dashboard/*" element={<Dashboard />}>
            <Route index element={<Information />} />
            <Route path="post_new_job" element={<PostNewJob />} />
          </Route>
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}
