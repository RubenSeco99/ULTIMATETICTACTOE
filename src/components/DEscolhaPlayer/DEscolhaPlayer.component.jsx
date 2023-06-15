import React, { useState } from "react";
import "./DEscolhaPlayer.css";
import PainelJogo from "../APainelJogo/APainelJogo.component";

function FormDados(props) {
  const numberofplayers = props.twoPlayers;
  const [jogador1, setJogador1] = useState(""); //guarda o nome dos jogadores
  const [jogador2, setJogador2] = useState("");
  const [advanceToForm, setAdvanceToForm] = useState(false);
  const [dificulty, setDificulty] = useState("facil");
  const [choosenPlayer, setChoosenPlayer] = useState("");//ESCOLHER QUAL O PRIMEIRO simbolo a jogar
  const [jogador1Simbolo, setJogador1Simbolo] = useState("");//saber qual o simbolo do jogador1 consequentemente o outro é o do jogador2/PC
  const changeGameOn=props.changeGameOn;
  const changeTime=props.changeTime;
  const data = {numberofplayers,jogador1,jogador2,dificulty,choosenPlayer,jogador1Simbolo,changeGameOn,changeTime};

  function sortearSimbolo()
  {
    const players = ["X", "O"];
    const randomIndex = Math.floor(Math.random() * 1);
    setChoosenPlayer(players[randomIndex]);
    const playerIndex = Math.floor(Math.random() * 1);
    setJogador1Simbolo(playerIndex);
  }

  function advance(event) {
    event.preventDefault();
    if(jogador1 !== "" ){
      if(numberofplayers===true && jogador2 !==""){
        setAdvanceToForm(true);
        sortearSimbolo();
      }
      if(numberofplayers===false){
        setAdvanceToForm(true);
        sortearSimbolo();
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
                            dificulty={data.dificulty}
                            choosenPlayer={data.choosenPlayer}
                            changeTime={data.changeTime}
                            changeGameOn={data.changeGameOn}
                            jogador1Simbolo={data.jogador1Simbolo} />}
    </div>
  );
}

export default FormDados;
