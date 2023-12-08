import React, { ReactElement } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children: ReactElement | string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  );
};

export default Button;
