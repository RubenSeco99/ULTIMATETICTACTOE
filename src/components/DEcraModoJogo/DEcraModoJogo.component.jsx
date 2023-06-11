import React, { useState } from "react";
import FormDados from "../DEscolhaPlayer/DEscolhaPlayer.component";
import "./DEcraModoJogo.css";

function ModoDeJogo() {//escolha de player vs player ou playver vs pc,leva a preenhcer um formulario com todos os dados
 
  const [twoPlayers, setTwoPlayers] = useState(false);

  const [advanceToForm, setAdvanceToForm] = useState(false);

  function determinatePlayers(event) {
      event.preventDefault();//garante que não acontece mais nada alem daquilo que queremos 
      setTwoPlayers(true);//quando for para avançar para o form saber se tem de pedir dois players ou um
      setAdvanceToForm(true);//preparado para avançar para o form
  }

  function advance(event) {
      event.preventDefault();
      setAdvanceToForm(true);
  }

  return (
    
        <div className="modo-jogo" >
          <button className="modo-jogo-button" onClick={determinatePlayers} style={{ display: advanceToForm === false ? 'flex' : 'none' }}>
            Player Vs Player
          </button>
          <button className="modo-jogo-button" onClick={advance} style={{ display: advanceToForm === false ? 'flex' : 'none' }}>
            Player Vs Pc
          </button>
          {advanceToForm && <FormDados twoPlayers={twoPlayers} />}
        </div>
  );
}

export default ModoDeJogo;
