import React, { useState } from "react";
import "./DEscolhaPlayer.css";

function QualONomeDoJogador() {
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");
  const [etapa, setEtapa] = useState(1);

  const handleContinuar = () => {
    if (etapa === 1) {
      setEtapa(2);
    } else if (etapa === 2) {
      console.log("Nome do jogador 1:", jogador1);
      console.log("Nome do jogador 2:", jogador2);
      setEtapa(1);
      setJogador1("");
      setJogador2("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleContinuar();
    }
  };

  return (
    <div className="container">
      {etapa === 1 ? (
        <>
          <div className="question">Quem é você?</div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Jogador 1"
              value={jogador1}
              onChange={(e) => setJogador1(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
        </>
      ) : (
        <>
          <div className="question">Quem é você?</div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Jogador 2"
              value={jogador2}
              onChange={(e) => setJogador2(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
        </>
      )}
      <button className="continue-button" onClick={handleContinuar}>
        Continuar
      </button>
    </div>
  );
}

export default QualONomeDoJogador;
