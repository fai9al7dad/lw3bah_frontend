import { useRouter } from "next/router";
import React from "react";
import { SecondaryButton } from "../../../common/components/atoms";
import { useAuth } from "../domain/usecases/use_auth";

export default function LogoutButton() {
  const { logout } = useAuth({});
  return (
    <SecondaryButton
      className="text-xs"
      onClick={() => {
        logout();
      }}
    >
      تسجيل الخروج
    </SecondaryButton>
  );
}
