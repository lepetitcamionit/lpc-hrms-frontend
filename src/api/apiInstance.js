import axios from "axios";

const current = process.env.REACT_APP_CURRENT_ENV;

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_DEV_URL || "http://localhost:4000/v1",
  withCredentials: true,
});

apiInstance.interceptors.request.use(
  async function (config) {
    const baseURL =
      current === "DEVELOPMENT"
        ? process.env.REACT_APP_DEV_URL || "http://localhost:4000/v1"
        : process.env.REACT_APP_PRODUCTION_URL || "https://api.example.com";

    const token = localStorage.getItem("authToken");

    config.baseURL = baseURL;

    console.log("apiInstance");
    console.log(token);
    console.log(config.baseURL);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // config.headers.Cookie = `token=${token}`;
    }

    console.log("Header:", config.headers.Cookie);

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default apiInstance;
