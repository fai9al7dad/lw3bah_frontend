import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://haql-api.waqf-raqmy.com/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    accept: "application/json",
  },
  withCredentials: true,
});

export default axios;
