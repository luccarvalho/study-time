import React from "react";
import style from "../List.module.scss";
import { TasksProps } from "../../../types/tarefas";

interface ItemProps extends TasksProps {
  selecionaTarefa: (tarefaSelecionada: TasksProps) => void;
}

const Item = ({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: ItemProps) => {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""}`}
      onClick={() =>
        selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};

export default Item;
