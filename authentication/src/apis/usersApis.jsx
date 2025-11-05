import { axiosInstance } from "../config/axiosInstance";

export const fetchUsersData = async () => {
  try {
    console.log("api call hui");
    let res = await axiosInstance.get("/users");
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log("error in users api", error);
  }
};
