import axios from "axios";
import { getCookie } from "../Screens/LoginScreen";

const instance = axios.create({
  baseURL: "http://mju-hackathon.p-e.kr:8080",
  headers: {
    Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhMjY5MjY0MCIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NjU4Mzg2OTd9.lRhF0HZy3Jy-CaS_DHdgiNWbQwVViGVVaFOcYUeNFWrA2Mmzux9RAOTgCzoqj7peU8XHAmzky5b0T2sKNXpUIA"}`,
  },
});
instance.interceptors.request.use((config) => {
  const token = getCookie("authToken");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
