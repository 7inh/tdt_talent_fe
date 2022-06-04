import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import { selectLogin } from "../../features/login/loginSlice";
import CandidateDashBoard from "./candidate/CandidateDashboard";
import Resume from "./candidate/Resume";
import CompanyDashboard from "./company/CompanyDashboard";
import Information from "./company/Infomation";

export default function Dashboard() {
  const { user } = useSelector(selectLogin);
  console.log("user", user);
  switch (user.role) {
    case "company": {
      return (
        <>
          <Routes>
            <Route path="/" element={<CompanyDashboard />}>
              <Route index element={<Information />} />
            </Route>
          </Routes>
        </>
      );
    }
    default:
      return (
        <>
          <Routes>
            <Route path="/" element={<CandidateDashBoard />}>
              <Route index element={<Resume />} />
            </Route>
          </Routes>
        </>
      );
  }
}
