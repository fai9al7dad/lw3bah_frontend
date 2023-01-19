import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { PrimaryButton, TextInput } from "../../../common/components/atoms";
import InputError from "../../../common/components/atoms/input_error";
import { useAuth } from "../domain/usecases/use_auth";
import AuthSessionStatus from "./auth_session_status";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });
  const [status, setStatus] = useState(null);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    shouldRemember: false,
  });

  const onChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const [errors, setErrors] = useState<any>([]);
  const submitForm = (event: any) => {
    event.preventDefault();

    login({
      email: formState.email,
      password: formState.password,
      setErrors,
      setStatus,
    });
  };
  return (
    <form onSubmit={submitForm}>
      <AuthSessionStatus className="mb-4" status={status} />

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
        label="كلمة المرور"
        name="password"
        onChange={onChange}
        type="password"
        value={formState.password}
        placeholder="ادخل كلمة المرور"
        className=""
      />
      <Link href="/auth/forgot_password" className="">
        <div className=" text-sm  text-blue-500 mt-2 mb-2 hover:underline">
          نسيت كلمة المرور{" "}
        </div>
      </Link>
      <InputError messages={errors.password} className="mt-2" />
      <div className="block mb-4 ">
        <label htmlFor="remember_me" className="inline-flex items-center">
          <input
            id="remember_me"
            type="checkbox"
            name="remember"
            className=" bg-neutral-100 text-right rounded-md  border-neutral-300 focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
            onChange={onChange}
          />

          <span className="mr-2 text-sm text-gray-600">تذكرني</span>
        </label>
      </div>
      <PrimaryButton className="mb-5 w-full">تسجيل الدخول</PrimaryButton>
      <hr />
      <div className=" text-sm mt-4 text-center">
        <Link href="/auth/register" className="">
          ليس لديك حساب؟{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            أنشئ حساب جديد
          </span>
        </Link>
      </div>
    </form>
  );
}
