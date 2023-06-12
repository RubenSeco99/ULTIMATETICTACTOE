import React, { useState } from "react";
import "./DEscolhaPlayer.css";
import PainelJogo from "../APainelJogo/APainelJogo.component";

function FormDados(props) {
  const numberofplayers = props.twoPlayers;
  const [jogador1, setJogador1] = useState(""); //guarda o nome dos jogadores
  const [jogador2, setJogador2] = useState("");
  const [advanceToForm, setAdvanceToForm] = useState(false);
  const [dificulty, setDificulty] = useState("facil");
  const data = {numberofplayers,jogador1,jogador2,dificulty};
  //console.log(numberofplayers);
  // const [etapa, setEtapa] = useState(1);

  /*const handleContinuar = () => {
    if (etapa === 1) {
      setEtapa(2);
    } else if (etapa === 2) {
      console.log("Nome do jogador 1:", jogador1);
      console.log("Nome do jogador 2:", jogador2);
      setEtapa(1);
      setJogador1("");
      setJogador2("");
    }
  };*/

  /*const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleContinuar();
    }
  };*/

  function advance(event) {
    event.preventDefault();
    if(jogador1 !== "" ){
      if(numberofplayers===true && jogador2 !==""){
        setAdvanceToForm(true);
      }
      if(numberofplayers===false){
        setAdvanceToForm(true);
      }
    
    }
  }
  function changeDificultyToHard(dificulty) {
      setDificulty("dificil");
  }
  function changeDificultyToEasy(dificulty) {
    setDificulty("facil");
  }

  return (
    <div className="dadosForm">
      <div style={{ display: advanceToForm === false ? "block" : "none" }}>
        <div className="question">Introduza o nome do Jogador 1</div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Jogador 1"
            value={jogador1}
            onChange={(e) => setJogador1(e.target.value)}//identifica a tecla utilizada , e funciona em conjunto com a funcao seguinte
            //onKeyDown={handleKeyPress}//permite que o utilizador use o enter em vez de ter de clicar manualmente no botão continuar
          />
        </div>
        <div className="wrapplayer2" style={{ display: numberofplayers === true ? "block" : "none" }}>
          <div className="question">Introduza o nome do Jogador 2</div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Jogador 2"
              value={jogador2}
              onChange={(e) => setJogador2(e.target.value)}
              //onKeyDown={handleKeyPress}
            />
          </div>
        </div>
        <div id="dificuldade">
          <div className="question">Escolha a dificuldade</div>
          <button id="easy-button" className={`dificulty-button ${dificulty === "facil" ? "choosenDificulty" : ""}`} onClick={changeDificultyToEasy}>
            Fácil
          </button>
          <button id="hard-button" className={`dificulty-button ${dificulty === "dificil" ? "choosenDificulty" : ""}`} onClick={changeDificultyToHard}>
            Difícil
          </button>
        </div>
        <button className="continue-button" onClick={advance}>
          Continuar
        </button>
      </div>
      {advanceToForm && <PainelJogo 
                            numberofplayers={data.numberofplayers} 
                            jogador1={data.jogador1}
                            jogador2={data.jogador2}
                            dificulty={data.dificulty} />}
    </div>
  );
}

export default FormDados;
