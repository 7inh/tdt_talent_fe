import axios from "axios";

const updateProfile = async (token: string | null, data: any) => {
  var config = {
    method: "post",
    url: "http://localhost:7000/api/profile/upsert",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  const response = await axios(config);
  return response.data;
};

export default updateProfile;
