import axios from "axios";
import { getCookie } from "../Screens/LoginScreen";

const instance = axios.create({
  baseURL: "http://mju-hackathon.p-e.kr:8080",
  headers: { Authorization: `Bearer ${getCookie("authToken")}` },
});

export default instance;
