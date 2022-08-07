import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const useApplicationListByCandidate = () => {
  const { token } = useSelector(selectLogin);
  const [applications, setApplications] = useState([
    {
        id: "",
        job_title: "",
        company_name: "",
        company_avatar: "",
        company_address: "",
        employment_type: "",
        location: "",
        salary: "",
    },
  ]);

  useEffect(() => {
    const getApplications = async () => {
      var axios = require("axios");

      var config = {
        method: "get",
        url: "http://localhost:7000/api/application/get_by_candidate",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);

      setApplications(response.data);
    };

    getApplications();
  }, [token]);

  return applications;
};

export default useApplicationListByCandidate;
