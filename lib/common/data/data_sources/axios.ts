import Axios, { AxiosResponse } from "axios";
import { Type } from "typescript";

const axios = Axios.create({
  baseURL: "http://127.0.0.1:8090/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export const safeAxiosHandler = (axiosCall: Function): Promise<Type> => {
  try {
    return axiosCall();
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export default axios;
