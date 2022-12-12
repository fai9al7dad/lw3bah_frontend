import Link from "next/link";
import React, { useState } from "react";
import {
  PrimaryButton,
  TextInput,
  Wrapper,
} from "../../../common/components/atoms";
import InputError from "../../../common/components/atoms/input_error";
import { AuthLayout } from "../../../common/components/layouts/auth_layout";
import { useAuth } from "../domain/usecases/use_auth";

export default function ForgotPasswordForm() {
  const { forgotPassword } = useAuth({});

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<any>([]);
  const [status, setStatus] = useState(null);

  const submitForm = (event: any) => {
    event.preventDefault();

    forgotPassword({ email, setErrors, setStatus });
  };
  return (
    <form onSubmit={submitForm}>
      <TextInput
        label="البريد الإلكتروني"
        name="email"
        type="email"
        value={email}
        onChange={(event: any) => setEmail(event.target.value)}
        placeholder="أدخل بريدك الإلكتروني "
        className="mb-2"
      />
      <InputError messages={errors.email} className="my-2" />

      <PrimaryButton className="my-5 w-full">تسجيل الدخول</PrimaryButton>
      <hr />
      <div className="text-sm mt-4 text-center">
        لديك حساب؟{" "}
        <Link
          href="/auth/login"
          className="text-blue-500 hover:underline cursor-pointer"
        >
          تسجيل الدخول
        </Link>
      </div>
    </form>
  );
}
