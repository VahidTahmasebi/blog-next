const btnType = {
  primary:
    "text-primary-700 hover:text-white bg-primary-100 hover:bg-primary-900",
  secondary:
    "text-secondary-500 hover:text-secondary-0 bg-secondary-200 hover:bg-secondary-500",
  outline:
    "border border-secondary-200 text-secondary-500 hover:bg-secondary-200",
  red: "text-red-500 hover:text-white bg-red-100 hover:bg-red-500",
  danger: "border border-red-100 text-red-500",
};

function ButtonIcon({ children, onClick, className, variant, ...rest }) {
  return (
    <button
      onClick={onClick}
      className={`
        ${btnType[variant]}
        ${className} flex items-center justify-center gap-x-1 p-1 rounded-md
        [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-inherit
        text-xs lg:text-sm
        transition-all duration-300 ease-out"`}
      {...rest}>
      {children}
    </button>
  );
}

export default ButtonIcon;
