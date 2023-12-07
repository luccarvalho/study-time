import React, { useEffect, useState } from "react";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { TasksProps } from "../../types/tarefas";

interface TimerProps {
  selecionado: TasksProps | undefined;
  finalizarTarefa: () => void;
}

const Timer = ({ selecionado, finalizarTarefa }: TimerProps) => {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  const regressiva = (contador: number = 0) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }

      finalizarTarefa();
    }, 1000);
  };

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

      <div className={style.relogioWrapper}>
        <Clock tempo={tempo} />
      </div>
      <Button onClick={() => regressiva(tempo)}>Começar</Button>
    </div>
  );
};

export default Timer;
