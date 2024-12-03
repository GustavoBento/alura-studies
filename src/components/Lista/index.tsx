import { useState } from "react";
import style from "./Lista.module.scss";
import Item from "./Item";

export default function Lista() {
  const [tarefas, setTarefas] = useState([
    {
      descricao: "JavaScript",
      tempo: "01:30:00",
    },
    {
      descricao: "React",
      tempo: "03:00:00",
    },
    {
      descricao: "TypeScript",
      tempo: "02:00:00",
    },
  ])
  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={() => {
        setTarefas([...tarefas, {descricao: "Estudar estado", tempo: "01:45:00"}])
      }}>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <Item key={index} {...tarefa} />
        ))}
      </ul>
    </aside>
  );
}
