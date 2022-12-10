import { getData } from "./get_data";

export const fetcher = (url: string) =>
  getData(url).then((res: any) => {
    if (res.errors) {
      throw res.errors;
    }
    return res.data;
  });
