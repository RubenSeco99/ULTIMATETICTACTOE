import React, { useEffect, useState } from "react";
import "./DTemporizador.css";

function Temporizador() {
  const [tempoRestante, setTempoRestante] = useState(120);
  const [contadorAtivo, setContadorAtivo] = useState(false);

  useEffect(() => {
    let intervalId;

    if (contadorAtivo) {
      intervalId = setInterval(() => {
        setTempoRestante((prevTempo) => prevTempo - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [contadorAtivo]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setContadorAtivo(true);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  const formatarTempo = (tempo) => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;

    return `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`temporizador-container ${contadorAtivo ? "ativo" : ""}`}>
      <div className="temporizador-display">{formatarTempo(tempoRestante)}</div>
    </div>
  );
}

export default Temporizador;
