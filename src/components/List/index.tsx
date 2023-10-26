import React from "react";
import style from "./List.module.scss";
import Item from "./Item";

const List = () => {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:30:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:30:00",
    },
    {
      tarefa: "TypeScript",
      tempo: "02:00:00",
    },
  ];

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
