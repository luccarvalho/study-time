import React, { useState } from "react";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

import { TasksProps } from "../../types/tarefas";

interface TimerProps {
  selecionado: TasksProps | undefined;
}

const Timer = ({ selecionado }: TimerProps) => {
  const [tempo, setTempo] = useState<number>();

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  );
};

export default Timer;
