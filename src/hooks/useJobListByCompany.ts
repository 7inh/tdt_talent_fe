import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const useJobListByCompany = () => {
  const { token } = useSelector(selectLogin);
  const [jobs, setJobs] = useState([
    {
      id: null,
      title: "-",
      state: "-",
      created_at: "-",
      total: "-"
    },
  ]);

  useEffect(() => {
    const getJobs = async () => {
      var axios = require("axios");

      var config = {
        method: "get",
        url: "http://localhost:7000/api/job/get_by_company",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);
      console.log(response)

      setJobs(response.data);
    };

    getJobs();
  }, [token]);

  return jobs;
};

export default useJobListByCompany;
