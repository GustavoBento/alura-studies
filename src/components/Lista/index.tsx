import style from "./Lista.module.scss";
import Item from "./Item";
import { ITarefa } from "../../types/tarefas";

export default function Lista({tarefas}: {tarefas: ITarefa[]}) {
  
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
