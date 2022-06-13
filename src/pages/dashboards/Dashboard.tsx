import { useSelector } from "react-redux";
import { selectLogin } from "../../features/login/loginSlice";
import AdminDashboard from "./admin/AdminDashboard";
import CandidateDashBoard from "./candidate/CandidateDashboard";
import CompanyDashboard from "./company/CompanyDashboard";

export default function Dashboard() {
  const { user } = useSelector(selectLogin);

  switch (user.role) {
    case "admin": {
      return (
        <>
          <AdminDashboard />
        </>
      );
    }
    case "company": {
      return (
        <>
          <CompanyDashboard />
        </>
      );
    }
    default:
      return (
        <>
          <CandidateDashBoard />
        </>
      );
  }
}
