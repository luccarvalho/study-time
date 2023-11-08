import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss";
import Timer from "../components/Timer";
import { TasksProps } from "../types/tarefas";

const App = () => {
  const [tarefas, setTarefas] = useState<TasksProps[]>([]);
  const [selecionado, setSelecionado] = useState<TasksProps>();

  function selecionaTarefa(tarefaSelecionada: TasksProps) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Timer />
    </div>
  );
};

export default App;
