import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const useNotificationList = () => {
  const { token } = useSelector(selectLogin);
  const [notification, setNotifications] = useState<{
    from_name: string;
    from_avatar: string;
    action: string;
    job_title: string;
    created_at: string;
  }[]>([]);

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

      console.log("===========================", response.data);

      setNotifications(response.data);
    };

    getNotifications();
  }, [token]);

  return notification;
};

export default useNotificationList;
