import React from "react";
import style from "./Botao.module.scss";

interface Props {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
}

export default function Botao({ children, type = "button" }: Props) {
  return (
    <button type={type} className={style.botao}>
      {children}
    </button>
  );
}
