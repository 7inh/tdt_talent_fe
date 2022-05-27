import axios from "axios";

const loginAPI = async (token: string) => {
  var config = {
    method: "get",
    url: "http://localhost:7000/api/account/login",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios(config);
  return response.data;
};

export default loginAPI;
