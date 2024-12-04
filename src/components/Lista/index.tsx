import style from "./Lista.module.scss";
import Item from "./Item";
import { ITarefa } from "../../types/tarefas";

interface Props {
  tarefas: ITarefa[],
  selecionarTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({tarefas, selecionarTarefa}: Props) {
  
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <Item selecionarTarefa={selecionarTarefa} key={tarefa.id} {...tarefa} />
        ))}
      </ul>
    </aside>
  );
}
