import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  theme?: ThemeButton;
}

export const Button = ({
  children,
  className = "",
  theme = ThemeButton.CLEAR,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};
