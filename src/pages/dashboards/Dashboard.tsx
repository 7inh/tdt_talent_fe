import { useSelector } from "react-redux";
import { selectLogin } from "../../features/login/loginSlice";
import CandidateDashBoard from "./candidate/CandidateDashboard";
import CompanyDashboard from "./company/CompanyDashboard";

export default function Dashboard() {
  const { user } = useSelector(selectLogin);
  console.log("user", user);

  switch (user.role) {
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
