import axios from "axios";
// import { getItemLocalStore } from "../helpers/index.ts";

const Api = axios.create({
  baseURL: "https://zany-teal-wasp-fez.cyclic.app", //"http://localhost:3001", //
  timeout: 10000,
  headers: { "Contente-Type": "application/json" },
});
Api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
