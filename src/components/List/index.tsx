import React from "react";
import style from "./List.module.scss";
import Item from "./Item";
import { TasksProps } from "../../types/tarefas";

interface ListProps {
  tarefas: TasksProps[];
  selecionaTarefa: (tarefaSelecionada: TasksProps) => void;
}

const List = ({ tarefas, selecionaTarefa }: ListProps) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
