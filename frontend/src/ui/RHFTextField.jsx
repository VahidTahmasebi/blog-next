export default function RHFTextField({
  type = "text",
  name,
  label,
  dir = "rtl",
  register,
  errors,
  validationSchema = {},
  ...rest
}) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  return (
    <div
      className={`textField relative ${hasError ? "textField--invalid" : ""}`}>
      <label htmlFor={name} className="block mb-2 text-secondary-700">
        {label}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        className={`textField__input ${
          dir === "ltr" ? "text-left" : "text-right"
        }`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {errors && errors[name] && (
        <span className="block mt-2 text-xs text-red-600">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
