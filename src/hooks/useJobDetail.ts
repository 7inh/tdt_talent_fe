import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const useJobDetail = (job_id: number) => {
  const { token } = useSelector(selectLogin);
  const [job, setJob] = useState({
    title: "",
    company_name: "",
    employment_type: "",
    created_at: "",
    expire_date: "",
    location: "",
    salary: "",
    position: "",
    experience_requirement: "",
    description: "",
  });

  useEffect(() => {
    const getJobs = async () => {
      var axios = require("axios");

      var config = {
        method: "get",
        url: "http://localhost:7000/api/job/get_detail/" + job_id,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);

      setJob(response.data);
    };

    getJobs();
  }, [job_id, token]);

  return job;
};

export default useJobDetail;
