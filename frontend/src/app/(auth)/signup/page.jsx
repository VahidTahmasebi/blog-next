"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RHFTextField from "@/ui/RHFTextField";
import Button from "@/ui/Button";

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "نام و نام خانوادگی نامعتبر است")
      .max(30)
      .required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {};

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
          isRequired
          errors={errors}
        />
        <RHFTextField
          register={register}
          name="email"
          label="ایمیل"
          dir="ltr"
          isRequired
          errors={errors}
        />
        <RHFTextField
          register={register}
          type="password"
          name="password"
          label="رمز عبور"
          dir="ltr"
          isRequired
          errors={errors}
        />
      </form>
      <Button type="submit" variant="primary" className="w-full">
        تایید
      </Button>
    </div>
  );
};

export default Signup;
