import axios from "./axios";
interface res {
  data: any;
  errors: any;
}

export async function getData(url: string) {
  // Call an external API endpoint to get posts
  try {
    const res = await axios.get(url);
    return { data: res.data, errors: null };
  } catch (err: any) {
    return { data: null, errors: err.response?.data };
  }
}
