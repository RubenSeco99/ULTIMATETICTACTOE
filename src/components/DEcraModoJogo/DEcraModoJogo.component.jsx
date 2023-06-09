import React, { useState } from "react";
import QualONomeDoJogador from "../DEscolhaPlayer/DEscolhaPlayer.component";
import "./DEcraModoJogo.css";

function ModoDeJogo() {
  const [mostrarEscolhaPlayer, setMostrarEscolhaPlayer] = useState(false);

  const handleJogarComAmigo = () => {
    setMostrarEscolhaPlayer(true);
  };

  const handleVoltar = () => {
    setMostrarEscolhaPlayer(false);
  };

  return (
    <div className={`container ${mostrarEscolhaPlayer ? "amigo" : ""}`}>
      {!mostrarEscolhaPlayer ? (
        <div className="modo-jogo">
          <button className="modo-jogo-button" onClick={handleJogarComAmigo}>
            Jogar com um amigo
          </button>
          <button className="modo-jogo-button">Jogar contra o robô</button>
        </div>
      ) : null}
      {mostrarEscolhaPlayer && (
        <QualONomeDoJogador onVoltar={handleVoltar} />
      )}
    </div>
  );
}

export default ModoDeJogo;
