import { useState } from "react";
import { toast } from "react-toastify";
import axios from "../data/data_sources/axios";

const useSubmit = () => {
  const [errors, setErrors] = useState<any>([]);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const send = async ({
    sendFunction,
    onSuccess,
    showSuccessToast,
  }: sendProps) => {
    setLoading(true);
    await csrf();
    setErrors([]);
    try {
      let res;

      if (showSuccessToast) {
        res = await toast.promise(sendFunction(), {
          pending: "Loading...",
          success: "Success",
          error: "Error",
        });
      } else {
        try {
          res = await sendFunction();
        } catch (error) {
          toast.error("حصل خطأ ما");
        }
      }

      setResponse(res);
      onSuccess && onSuccess(res);
    } catch (error) {
      console.log(error);
      setErrors(error);
    } finally {
      setLoading(false);
    }
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
  sendFunction: (a?: any) => Promise<any>;
  onSuccess?: (a?: any) => void;
  showSuccessToast?: boolean;
}
