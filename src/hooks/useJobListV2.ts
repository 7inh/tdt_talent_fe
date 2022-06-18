import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const useJobListV2 = () => {
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
      position: "",
      state: "",
    },
  ]);
  const [refresh, setRefresh] = useState(0);

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

      setJobs(response.data);
    };
    getJobs();
  }, [token, refresh]);

  const reload = () => {
    setRefresh(refresh + 1);
  };

  return {
    jobs,
    reload,
  };
};

export default useJobListV2;
