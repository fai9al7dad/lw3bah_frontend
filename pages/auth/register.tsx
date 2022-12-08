import React from "react";
import { NavigationButton, Wrapper } from "../../lib/common/components/atoms";
import { AuthLayout } from "../../lib/common/components/layouts/auth_layout";
import { useAuth } from "../../lib/features/auth/domain/usecases/use_auth";
import LoginForm from "../../lib/features/auth/presentation/login_form";
import RegisterForm from "../../lib/features/auth/presentation/register_form";

export default function register() {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });
  return (
    <AuthLayout>
      <Wrapper title="تسجيل حساب جديد">
        <RegisterForm />
      </Wrapper>
    </AuthLayout>
  );
}
