import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const useAccountList = () => {
  const { token } = useSelector(selectLogin);
  const [company, setAccount] = useState([
    {
      id: "",
      account_id: "",
      email: "",
      full_name: "",
      role: "",
      avatar_url: "",
    },
  ]);

  useEffect(() => {
    const getAccount = async () => {
      var axios = require("axios");

      var config = {
        method: "get",
        url: "http://localhost:7000/api/account/get_all",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);

      setAccount(response.data);
    };

    getAccount();
  }, [token]);

  return company;
};

export default useAccountList;
