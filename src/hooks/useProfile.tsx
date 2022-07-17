import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const useProfile = () => {
  const { token } = useSelector(selectLogin);
  const [profile, setProfile] = useState({
    avatar_url: "",
    email: "",
    full_name: "",
    role: "",
    address: "",
    website: "",
    description: "",
    phone_number: "",
    attach_resume: "",
    attach_resume_url: "",
    contact_mail: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    const getProfile = async () => {
      var axios = require("axios");

      var config = {
        method: "get",
        url: "http://localhost:7000/api/profile/get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);

      setProfile(response.data);
    };

    getProfile();
  }, [token]);


  return profile;
};

export default useProfile;
