import React from "react";
import style from "./List.module.scss";
import Item from "./Item";
import { TasksProps } from "../../types/tarefas";

const List = ({ tarefas }: { tarefas: TasksProps[] }) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
