import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeError } from "../features/errorSlice";

const ErrorHandler = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.error);

  useEffect(() => {
    if (message) {
      toast.error(message);
      dispatch(removeError());
    }
  }, [message]);

  return null;
};

export default ErrorHandler;
