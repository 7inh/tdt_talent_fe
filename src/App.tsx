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
import JobDetail from "./pages/JobDetail";
import ManageJob from "./pages/dashboards/company/ManageJob";
import ManageApplication from "./pages/dashboards/company/ManageApplication";
import Resume from "./pages/dashboards/candidate/Resume";
import AppliedJob from "./pages/dashboards/candidate/AppliedJob";
import ManageAccount from "./pages/dashboards/admin/ManageAccount";
import AdminManageJob from "./pages/dashboards/admin/AdminManageJob";
import CompanyDetail from "./pages/CompanyDetail";

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
          <Route path="job/:id" element={<JobDetail />} />
          <Route path="companies" element={<Company />}></Route>
          <Route path="company/:id" element={<CompanyDetail />}></Route>
          <Route path="dashboard/*" element={<Dashboard />}>
            {user.role === "admin" && (
              <>
                <Route index element={<ManageAccount />} />
                <Route path="manage_job" element={<AdminManageJob />} />
              </>
            )}
            {user.role === "company" && (
              <>
                <Route index element={<Information />} />
                <Route path="post_new_job" element={<PostNewJob />} />
                <Route path="manage_job" element={<ManageJob />} />
                <Route path="manage_application" element={<ManageApplication />} />
              </>
            )}
            {user.role === "candidate" && (
              <>
                <Route index element={<Resume />} />
                <Route path="applied_job" element={<AppliedJob />} />
              </>
            )}
          </Route>
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}
