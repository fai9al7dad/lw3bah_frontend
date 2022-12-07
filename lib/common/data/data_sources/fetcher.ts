import { getData } from "./getData";

export const fetcher = (url: String) =>
  getData(url).then((res: any) => {
    if (res.errors) {
      throw res.errors;
    }
    return res.data;
  });
