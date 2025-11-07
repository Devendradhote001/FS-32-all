import axios from "axios";
import { store } from "../store/Store";
import { setError } from "../features/errorSlice";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = error.status;

    if (message === 404) {
      store.dispatch(setError("Something went wrong"));
    } else {
      store.dispatch(setError("Invalid api"));
    }
  }
);
