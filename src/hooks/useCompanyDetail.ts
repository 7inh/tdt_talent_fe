import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";


interface Company {
  full_name: string;
  avatar_url: string;
  country: string;
  address: string;
  description: string;
  phone_number: string;
  contact_mail: string;
  website: string;
}

const useCompanyDetail = (account_id: number) => {
  const { token } = useSelector(selectLogin);
  const [account, setJob] = useState<Company>();

  useEffect(() => {
    const getJobs = async () => {
      var axios = require("axios");

      var config = {
        method: "get",
        url: "http://localhost:7000/api/account/get_detail/" + account_id,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);

      setJob(response.data);
    };

    getJobs();
  }, [account_id, token]);

  return account;
};

export default useCompanyDetail;
