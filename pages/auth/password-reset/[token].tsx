import { Wrapper } from "../../../lib/common/components/atoms";
import { AuthLayout } from "../../../lib/common/components/layouts/auth_layout";
import ForgotPasswordForm from "../../../lib/features/auth/presentation/forgot_password_form";
import PasswordReset from "../../../lib/features/auth/presentation/restore_password_form";

export default function register() {
  return (
    <AuthLayout>
      <Wrapper title="استعادة كلمة المرور">
        <PasswordReset />
      </Wrapper>
    </AuthLayout>
  );
}
