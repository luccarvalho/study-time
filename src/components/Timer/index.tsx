import React, { useState } from "react";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { TasksProps } from "../../types/tarefas";

interface TimerProps {
  selecionado: TasksProps | undefined;
}

const Timer = ({ selecionado }: TimerProps) => {
  const [tempo, setTempo] = useState<number>();

  if (selecionado?.tempo) {
    setTempo(tempoParaSegundos(selecionado.tempo));
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  );
};

export default Timer;
