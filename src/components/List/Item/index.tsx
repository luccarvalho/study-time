import React from "react";
import style from "../List.module.scss";
import { TasksProps } from "../../../types/tarefas";

const Item = ({ tarefa, tempo, selecionado, completado, id }: TasksProps) => {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};

export default Item;
