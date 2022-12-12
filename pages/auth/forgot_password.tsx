import { Wrapper } from "../../lib/common/components/atoms";
import { AuthLayout } from "../../lib/common/components/layouts/auth_layout";
import ForgotPasswordForm from "../../lib/features/auth/presentation/forgot_password_form";

export default function register() {
  return (
    <AuthLayout>
      <Wrapper title="استعادة كلمة المرور">
        <div className="mb-4 text-sm text-gray-600">
          نسيت كلمة المرور؟ أدخل بريدك الإلكتروني وسنرسل لك رابط لإعادة تعيين
          كلمة المرور
        </div>
        <ForgotPasswordForm />
      </Wrapper>
    </AuthLayout>
  );
}
