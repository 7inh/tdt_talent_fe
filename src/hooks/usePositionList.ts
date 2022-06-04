import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const usePositionList = () => {
  const { token } = useSelector(selectLogin);
  const [positions, setPositions] = useState([
    {
      id: 0,
      title: "",
      description: "",
    },
  ]);

  useEffect(() => {
    const getPosition = async () => {
      var axios = require("axios");

      var config = {
        method: "get",
        url: "http://localhost:7000/api/position/get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);

      setPositions(response.data);
    };

    getPosition();
  }, [token]);

  return positions;
};

export default usePositionList;
