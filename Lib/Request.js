import axios from "axios";
import { getCookie } from "../Screens/LoginScreen";

const instance = axios.create({
  baseURL: "http://mju-hackathon.p-e.kr:8080",
  headers: { Authorization: `Bearer ${getCookie("authToken")}` },
});
instance.interceptors.request.use((config) => {
  const token = getCookie("authToken");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
instance.interceptors.response.use(null, (err) => {
  if (err.config && err.response && err.response.status === "401") {
    err.config.headers = { Authorization: `Bearer ${getCookie("authToken")}` };
    console.log("token : ", err.config.headers.Authorization);
  }
});
export default instance;
