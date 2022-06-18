import axios from "axios";

const upsertJob = async (token: string | null, data: any) => {
  var config = {
    method: "post",
    url: "http://localhost:7000/api/job/upsert",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  const response = await axios(config);
  return response.data;
};

export default upsertJob;
