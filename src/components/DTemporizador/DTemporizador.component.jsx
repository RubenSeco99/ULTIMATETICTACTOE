import React, { useEffect, useState } from "react";
import "./DTemporizador.css";

function Temporizador(props) {
  const [tempoRestante, setTempoRestante] = useState(props.tempo);
  //const [tempoFinalizado, setTempoFinalizado] =useState(false);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTempoRestante((prevTempo) => {
        if (prevTempo > 0) {
          return prevTempo - 1;
        } else {
          clearInterval(intervalId);
          props.changeTime();
          props.changeGameOn();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatarTempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos.toString().padStart(2, "0")}:${segundosRestantes.toString().padStart(2, "0")}`;
  };

  return (
    <div className="temporizador-container">
      <div className="tempo-restante">{formatarTempo(tempoRestante)}</div>
    </div>
  );
}

export default Temporizador;