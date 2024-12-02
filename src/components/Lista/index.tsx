import { Item } from "./Item";
import style from "./Lista.module.scss";

export default function Lista() {
  const tarefas = [
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
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <Item key={index} {...tarefa} />
        ))}
      </ul>
    </aside>
  );
}
