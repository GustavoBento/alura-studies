import { ITarefa } from "../../../types/tarefas";
import style from "../Lista.module.scss";

export default function Item({
  descricao,
  tempo,
  selecionado,
  completado,
  id,
}: ITarefa) {
  console.log("Item atual: ", {
    descricao,
    tempo,
    selecionado,
    completado,
    id,
  });
  return (
    <li className={style.item}>
      <h3> {descricao} </h3>
      <span> {tempo} </span>
    </li>
  );
}
