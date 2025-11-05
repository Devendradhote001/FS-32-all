import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsersData } from "../apis/usersApis";
import { getDataFromUsersHook } from "../hooks/usersApiHook";
import axios from "axios";
import { axiosInstance } from "../config/axiosInstance";

const UsersPage = () => {
  let { data, isPending } = getDataFromUsersHook();
  console.log(data);

  if (isPending) return <h1>Loading....</h1>;

  return <div>users page</div>;
};

export default UsersPage;
