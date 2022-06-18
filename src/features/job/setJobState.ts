import axios from "axios";

const setJobState = async (token: string | null, data: any) => {
  var config = {
    method: "post",
    url: "http://localhost:7000/api/job/set_state",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  const response = await axios(config);
  return response.data;
};

export default setJobState;
