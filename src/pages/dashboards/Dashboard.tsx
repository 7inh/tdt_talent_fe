import { useSelector } from "react-redux";
import { selectLogin } from "../../features/login/loginSlice";
import CandidateDashBoard from "./CandidateDashboard";
import CompanyDashboard from "./CompanyDashboard";

export default function Dashboard() {
    
  const { user } = useSelector(selectLogin);
  console.log('user', user)
    switch (user.role) {
        case 'company': {
            return (<>
                <CompanyDashboard />
            </>)
        }
        default:
            return (<>
                <CandidateDashBoard />
            </>)
    }
}