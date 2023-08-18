import { button, buttonChildOne, buttonChildTwo } from "./Button.style";
import { ButtonProps } from "./Button.types";

const Button = ({
  variant = "primary",
  onClick,
  disabled,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative"
      disabled={disabled}
      {...rest}
    >
      <span className={button({ variant })}>{children}</span>
      <span className={buttonChildOne()} />
      <span className={buttonChildTwo()} />
    </button>
  );
};

export default Button;
