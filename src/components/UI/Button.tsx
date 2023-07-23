import { ButtonHTMLAttributes, FC, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  customClassName?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <button
      className={`px-3 py-1 border-2 bg-accent font-semibold md:text-lg ${
        className ? className : ""
      }`}
      {...restProps}
    >
      {children}
    </button>
  );
};
// & { children: ReactNode }
