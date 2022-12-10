import Axios, { AxiosResponse } from "axios";
import { Type } from "typescript";

const axios = Axios.create({
  baseURL: "https://haql-api.waqf-raqmy.com/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export const safeAxiosHandler = (axiosCall: Function): Promise<Type> => {
  try {
    return axiosCall();
  } catch (err) {
    throw err;
  }
};
export default axios;
