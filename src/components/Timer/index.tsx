import React from "react";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";
import { tempoParaSegundos } from "../../common/utils/date";

const Timer = () => {
  console.log("conversão: ", tempoParaSegundos("01:01:01"));
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
