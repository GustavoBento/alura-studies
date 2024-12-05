import { ITarefa } from "../../../types/tarefas";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  descricao,
  tempo,
  selecionado,
  completado,
  id,
  selecionarTarefa,
}: Props) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${
        completado ? style.itemCompletado : ""
      } `}
      onClick={() =>
        !completado &&
        selecionarTarefa({
          descricao,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3> {descricao} </h3>
      <span> {tempo} </span>
      {completado && <span className={style.concluido} aria-label="tarefa compeltada"></span> }
    </li>
  );
}
