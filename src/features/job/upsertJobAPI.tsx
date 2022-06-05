import axios from "axios";

const upsertJobAPI = async (token: string, data: any) => {
  var config = {
    method: "post",
    url: "http://localhost:7000/api/job/upsert",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify(data),
  };

  const response = await axios(config);
  return response.data;
};

export default upsertJobAPI;
