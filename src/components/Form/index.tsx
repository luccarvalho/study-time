import React, { useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";

const Form = () => {
  const [estudos, setEstudos] = useState({
    tarefa: "",
    tempo: "00:00:00",
  });

  const adicionarEstudo = (evento: React.FormEvent) => {
    evento.preventDefault();
    console.log("estudos: ", estudos);
  };

  return (
    <form className={style.novaTarefa} onSubmit={adicionarEstudo}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          value={estudos.tarefa}
          onChange={(evento) =>
            setEstudos({ ...estudos, tarefa: evento.target.value })
          }
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          value={estudos.tempo}
          onChange={(evento) =>
            setEstudos({ ...estudos, tempo: evento.target.value })
          }
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button>Adicionar</Button>
    </form>
  );
};

export default Form;
