export type ButtonVariant = "primary" | "secondary" | "tertiary";

export type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
