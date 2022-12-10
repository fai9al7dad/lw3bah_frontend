import { useState } from "react";
import axios from "../data/data_sources/axios";

const useSubmit = () => {
  const [errors, setErrors] = useState<any>([]);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const send = async ({ sendFunction, onSuccess }: sendProps) => {
    await csrf();
    setErrors([]);
    setLoading(true);
    try {
      const res = await sendFunction();
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
}
