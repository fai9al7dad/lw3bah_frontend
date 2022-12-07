import React from "react";
import { NavigationButton, Wrapper } from "../../lib/common/components/atoms";
import { AuthLayout } from "../../lib/common/components/layouts/auth_layout";
import LoginForm from "../../lib/features/auth/presentation/login_form";
import RegisterForm from "../../lib/features/auth/presentation/register_form";

export default function register() {
  return (
    <AuthLayout>
      <Wrapper title="تسجيل حساب جديد">
        <RegisterForm />
      </Wrapper>
    </AuthLayout>
  );
}
