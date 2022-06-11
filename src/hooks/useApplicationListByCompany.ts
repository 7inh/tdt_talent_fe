import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const useApplicationListByCompany = () => {
  const { token } = useSelector(selectLogin);
  const [applications, setApplications] = useState([
    {
      id: "-",
      job_title: "-",
      candidate_name: "-",
      candidate_address: "-",
      state: "-",
      created_at: "-",
      candidate_avatar: "",
    },
  ]);

  useEffect(() => {
    const getApplications = async () => {
      var axios = require("axios");

      var config = {
        method: "get",
        url: "http://localhost:7000/api/application/get_by_company",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);
      console.log(response);

      setApplications(response.data);
    };

    getApplications();
  }, [token]);

  return applications;
};

export default useApplicationListByCompany;
