import React from "react";
import style from "./Botao.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function Botao({ children }: Props) {
  return <button className={style.botao}>{children}</button>;
}
