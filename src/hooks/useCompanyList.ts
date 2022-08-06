import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const useCompanyList = () => {
  const { token } = useSelector(selectLogin);
  const [company, setCompany] = useState([
    {
      full_name: "",
      address: "",
      country: "",
      avatar_url: "",
      account_id: "",
    },
  ]);

  useEffect(() => {
    const getCompany = async () => {
      var axios = require("axios");

      var config = {
        method: "get",
        url: "http://localhost:7000/api/account/get_all_company",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);

      setCompany(response.data);
    };

    getCompany();
  }, [token]);

  return company;
};

export default useCompanyList;
