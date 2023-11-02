import { getItem } from "@/utils/storage";
import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// api.interceptors.request.use(
//   async (config) => {
//     const token = getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosPrivate;
