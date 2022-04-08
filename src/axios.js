import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
});

const token = window.localStorage.getItem("access_token");

api.defaults.headers.common["Authorization"] = token;
export default api;
