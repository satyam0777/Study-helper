import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string, // tell TS it's a string
});
// const apiClient = axios.create({
//   baseURL: `${import.meta.env.VITE_API_URL}/api`, // <-- add /api
// });

apiClient.interceptors.request.use(
  (config) => {
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

export default apiClient;
