import React from "react";
import style from "./Botao.module.scss";

interface Props {
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

export default function Botao({ children, type = "button", onClick }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  );
}
