import { toast } from "react-toastify";
import axios from "../../../../common/data/data_sources/axios";
import useSubmit from "../../../../common/hooks/use_submit";

export const useSubscribeNews = () => {
  const { send } = useSubmit();

  const subscribe = ({ email, type }: { email: string; type: string }) => {
    send({
      sendFunction: async () => {
        await axios.post("/api/create-customer", {
          email: email,
          type: type,
        });
      },
      onSuccess: () => {},
    });
  };
  return { subscribe };
};
