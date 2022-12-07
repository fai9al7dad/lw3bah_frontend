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

export default function RegisterForm() {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    username: "",
    name: "",
    shouldRemember: false,
  });

  const onChange = (event: any) => {
    if (event.target.name === "email") {
      setFormState({
        ...formState,
        ["email"]: event.target.value.toLowerCase(),
        ["username"]: event.target.value.split("@")[0],
      });
      return;
    }
    console.log(event.target.name, event.target.value);

    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const [errors, setErrors] = useState<any>([]);
  const submitForm = (event: any) => {
    event.preventDefault();

    register({
      ...formState,
      email: formState.email.toLowerCase(),
      username: formState.username.toLowerCase(),
      setErrors,
    });
  };
  return (
    <form onSubmit={submitForm}>
      <TextInput
        label="البريد الإلكتروني"
        name="email"
        type="email"
        value={formState.email}
        onChange={onChange}
        placeholder="أدخل بريدك الإلكتروني "
        className="mb-5"
      />
      <InputError messages={errors.email} className="mt-2" />
      <TextInput
        label="اسم المستخدم"
        value={formState.username}
        name="username"
        type="text"
        onChange={onChange}
        placeholder="أدخل اسم المستخدم "
        className="mb-5"
      />
      <InputError messages={errors.username} className="mt-2" />
      <TextInput
        label="اسمك "
        name="name"
        type="text"
        onChange={onChange}
        value={formState.name}
        placeholder="أدخل اسمك الأول والأخير(اختياري) "
        className="mb-5"
      />
      <InputError messages={errors.name} className="mt-2" />
      <TextInput
        label="كلمة المرور"
        name="password"
        onChange={onChange}
        value={formState.password}
        type="password"
        placeholder="ادخل كلمة المرور"
        className="mb-5"
      />
      <InputError messages={errors.password} className="mt-2" />
      <TextInput
        label="أعد كتابة كلمة المرور"
        name="password_confirmation"
        onChange={onChange}
        value={formState.password_confirmation}
        type="password"
        placeholder="أعد ادخال كلمة المرور"
        className="mb-5"
      />
      <InputError messages={errors.password_confirmation} className="mt-2" />

      <PrimaryButton className="mb-5 w-full">تسجيل الدخول</PrimaryButton>
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
