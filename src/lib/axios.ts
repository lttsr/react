import Axios, { AxiosError } from "axios";
const axios = Axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    common: {
      Expires: -1,
      "Cache-Control": "no-cache,no-store,must-revalidate,max-age=-1,private",
    },
  },
});
axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err: AxiosError) => {
    console.log(err);
  }
);
export { axios };
