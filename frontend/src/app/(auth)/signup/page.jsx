"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/context/AuthContext";
import RHFTextField from "@/ui/RHFTextField";
import Button from "@/ui/Button";

const schema = yup
  .object({
    name: yup.string().min(5).max(30).required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

const Signup = () => {
  const { signup } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    await signup(values);
  };

  return (
    <div>
      <h1 className="mb-6 text-center text-xl font-bold text-secondary-600">
        ثبت نام
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          register={register}
          name="name"
          label="نام و نام خانوادگی"
          errors={errors}
        />
        <RHFTextField
          register={register}
          name="email"
          label="ایمیل"
          dir="ltr"
          errors={errors}
        />
        <RHFTextField
          register={register}
          type="password"
          name="password"
          label="رمز عبور"
          dir="ltr"
          errors={errors}
        />
        <Button
          type="submit"
          variant="primary"
          className="btn btn--primary w-full py-3 px-4 rounded-xl">
          تایید
        </Button>
      </form>
      <Link href="/signin" className="mt-6 text-center text-secondary-600">
        ورود
      </Link>
    </div>
  );
};

export default Signup;
