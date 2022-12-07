import { NextRouter } from "next/router";

export const logout = ({ router }: { router: NextRouter }) => {
  router.push("/auth/login");
};
