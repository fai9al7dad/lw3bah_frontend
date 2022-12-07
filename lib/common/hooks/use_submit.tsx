import axios from "axios";
import { useState } from "react";

const useSubmit = () => {
  const [errors, setErrors] = useState<any>([]);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const send = async ({
    payload,
    url,
    method = "post",
    onSuccess,
  }: sendProps) => {
    //   NProgress.start()

    await csrf();
    setErrors([]);
    setLoading(true);
    axios[method](url, payload)
      .then((res:any) => {
        setResponse(res.data);
        if (onSuccess != null) {
          onSuccess(res.data);
        }
      })
      .catch((error:any) => {
        console.log(error?.response?.data);
        // if (error.response.status !== 422) throw error
        if (error?.response?.data?.errors?.length > 0) {
          setErrors(error.response.data.errors);
        } else {
          setErrors(error.response.data?.message);
        }
      })
      .finally(() => setLoading(false));
  };

  return {
    send,
    errors,
    response,
    loading,
  };
};

export default useSubmit;

interface sendProps {
  payload: any;
  url: string;
  method?: string;
  onSuccess?: (a?: any) => void;
}
