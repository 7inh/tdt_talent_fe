import axios from "axios";

const applyJob = async (token: string | null, data: any) => {
  var config = {
    method: "post",
    url: "http://localhost:7000/api/application/apply_job",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  const response = await axios(config);
  return response.data;
};

export default applyJob;
