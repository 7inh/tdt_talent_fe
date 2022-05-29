import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const useJobList = () => {
  const { token } = useSelector(selectLogin);
  const [jobs, setJobs] = useState([
    {
      title: "",
      employment_type: "",
    },
  ]);

  useEffect(() => {
    const getJobs = async () => {
      var axios = require("axios");

      var config = {
        method: "get",
        url: "http://localhost:7000/api/job/get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);
      console.log("response", response.data);

      setJobs(response.data);
    };

    getJobs();
  }, [token]);

  return jobs;
};

export default useJobList;
