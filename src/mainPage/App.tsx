import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss";
import Timer from "../components/Timer";
import { TasksProps } from "../types/tarefas";

const App = () => {
  const [tarefas, setTarefas] = useState<TasksProps[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Timer />
    </div>
  );
};

export default App;
