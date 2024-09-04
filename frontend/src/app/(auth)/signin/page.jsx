"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signinApi } from "@/services/authService";
import RHFTextField from "@/ui/RHFTextField";
import Button from "@/ui/Button";
import Link from "next/link";

const schema = yup
  .object({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

const Signin = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    try {
      const { user, message } = await signinApi(values);
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <h1 className="mb-6 text-center text-xl font-bold text-secondary-600">
        ورود
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
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
      <Link href="/signup" className="mt-6 text-center text-secondary-600">
        ثبت نام
      </Link>
    </div>
  );
};

export default Signin;
