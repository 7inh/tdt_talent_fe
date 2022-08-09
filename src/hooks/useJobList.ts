import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const useJobList = (page: number) => {
  const { token } = useSelector(selectLogin);
  const [jobs, setJobs] = useState([
    {
      id: "",
      title: "",
      company_id: "",
      company_name: "",
      company_avatar: "",
      employment_type: "",
      created_at: "",
      location: "",
      salary: "",
      position: "",
      state: "",
    },
  ]);

  useEffect(() => {
    const getJobs = async () => {
      var axios = require("axios");

      var config = {
        method: "get",
        url: "http://localhost:7000/api/job/get/" + page,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);
      setJobs(response.data);
    };

    getJobs();
  }, [page, token]);

  return jobs;
};

export default useJobList;
