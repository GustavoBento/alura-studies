import { ITarefa } from "../../../types/tarefas";
import style from "../Lista.module.scss";

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
  console.log("Item atual: ", {
    descricao,
    tempo,
    selecionado,
    completado,
    id,
  });
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : '' }`}
      onClick={() =>
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
    </li>
  );
}
