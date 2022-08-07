import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const useJobTotal = () => {
  const { token } = useSelector(selectLogin);
  const [total, setTotal] = useState({ count: 0 });

  useEffect(() => {
    const getJobs = async () => {
      var axios = require("axios");

      var config = {
        method: "get",
        url: "http://localhost:7000/api/job/get_total",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);
      setTotal(response.data);
    };

    getJobs();
  }, [token]);

  return total;
};

export default useJobTotal;
