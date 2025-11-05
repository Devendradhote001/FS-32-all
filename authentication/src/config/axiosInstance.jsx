import axios from "axios";
import { setError } from "../features/errorSlice";
import { useDispatch } from "react-redux";
import { store } from "../store/Store";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = error.status;
    if (message === 404) {
      store.dispatch(setError("something went wrong"));
    } else {
      store.dispatch(setError("Invalid Api"));
    }
  }
);
