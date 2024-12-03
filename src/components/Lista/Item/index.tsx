import style from "../Lista.module.scss";

export default function Item({
  descricao,
  tempo,
}: {
  descricao: string;
  tempo: string;
}) {
  return (
    <li className={style.item}>
      <h3> {descricao} </h3>
      <span> {tempo} </span>
    </li>
  );
}
