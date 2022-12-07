import React from "react";
import { NavigationButton, Wrapper } from "../../lib/common/components/atoms";
import { AuthLayout } from "../../lib/common/components/layouts/auth_layout";
import LoginForm from "../../lib/features/auth/presentation/login_form";

export default function login() {
  return (
    <AuthLayout>
      <Wrapper title="تسجيل الدخول">
        <LoginForm />
      </Wrapper>
    </AuthLayout>
  );
}
