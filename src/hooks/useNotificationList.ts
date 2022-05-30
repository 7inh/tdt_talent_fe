import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const useNotificationList = () => {
  const { token } = useSelector(selectLogin);
  const [notification, setNotifications] = useState([
    {
      from: "",
      created_at: "",
    },
  ]);

  useEffect(() => {
    const getNotifications = async () => {
      var axios = require("axios");

      var config = {
        method: "get",
        url: "http://localhost:7000/api/notification/get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);
      console.log("response", response.data);

      setNotifications(response.data);
    };

    getNotifications();
  }, [token]);

  return notification;
};

export default useNotificationList;
