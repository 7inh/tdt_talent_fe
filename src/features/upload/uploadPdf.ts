import axios from "axios";
import FormData from "form-data";


const uploadPdf = async (token: string | null, [file]: any) => {
  var data = new FormData();
  data.append(
    "pdf",
    file,
    file.name,
  );

  var config = {
    method: "post",
    url: "http://localhost:7000/api/file/upload",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  const response = await axios(config);
  return response.data;
};

export default uploadPdf;
