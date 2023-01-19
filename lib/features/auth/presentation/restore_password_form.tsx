import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PrimaryButton, TextInput } from "../../../common/components/atoms";
import InputError from "../../../common/components/atoms/input_error";
import { useAuth } from "../domain/usecases/use_auth";

const PasswordReset = () => {
  const router = useRouter();

  const { resetPassword } = useAuth({ middleware: "guest" });

  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState<any>([]);
  const [status, setStatus] = useState(null);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    username: "",
    name: "",
    role: "teacher",
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

    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event: any) => {
    event.preventDefault();

    resetPassword({
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
      setStatus,
    });
  };

  useEffect(() => {
    setEmail(router.query.email || "");
  }, [router.query.email]);

  return (
    <form onSubmit={submitForm}>
      <TextInput
        label="البريد الإلكتروني"
        name="email"
        type="email"
        value={formState.email}
        onChange={onChange}
        placeholder="أدخل بريدك الإلكتروني "
        className="mb-2"
      />
      <InputError messages={errors.email} className="my-2" />
      <TextInput
        label="اسم المستخدم"
        value={formState.username}
        name="username"
        type="text"
        onChange={onChange}
        placeholder="أدخل اسم المستخدم "
        className="mb-2"
      />
      <InputError messages={errors.username} className="my-2" />
      <TextInput
        label="اسمك "
        name="name"
        type="text"
        onChange={onChange}
        value={formState.name}
        placeholder="أدخل اسمك الأول والأخير(اختياري) "
        className="mb-2"
      />
      <InputError messages={errors.name} className="my-2" />
      <TextInput
        label="كلمة المرور"
        name="password"
        onChange={onChange}
        value={formState.password}
        type="password"
        placeholder="ادخل كلمة المرور"
        className="mb-2"
      />
      <InputError messages={errors.password} className="my-2" />
      <TextInput
        label="أعد كتابة كلمة المرور"
        name="password_confirmation"
        onChange={onChange}
        value={formState.password_confirmation}
        type="password"
        placeholder="أعد ادخال كلمة المرور"
        className="mb-2"
      />
      <InputError messages={errors.password_confirmation} className="my-2" />

      <PrimaryButton className="my-5 w-full">
        استعادة كلمة المرور{" "}
      </PrimaryButton>
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
};

export default PasswordReset;
