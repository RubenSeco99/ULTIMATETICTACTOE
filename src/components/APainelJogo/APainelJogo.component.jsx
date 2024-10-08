import React, { useEffect, useState } from "react";
import "./APainelJogo.css";
import Temporizador from "../DTemporizador/DTemporizador.component";

function PainelJogo(props) {
  const CombinacoesPossiveis1_X = [
    "X",
    "X",
    "X",
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  const CombinacoesPossiveis2_X = [
    null,
    null,
    null,
    "X",
    "X",
    "X",
    null,
    null,
    null,
  ];
  const CombinacoesPossiveis3_X = [
    null,
    null,
    null,
    null,
    null,
    null,
    "X",
    "X",
    "X",
  ];
  const CombinacoesPossiveis4_X = [
    "X",
    null,
    null,
    "X",
    null,
    null,
    "X",
    null,
    null,
  ];
  const CombinacoesPossiveis5_X = [
    null,
    "X",
    null,
    null,
    "X",
    null,
    null,
    "X",
    null,
  ];
  const CombinacoesPossiveis6_X = [
    null,
    null,
    "X",
    null,
    null,
    "X",
    null,
    null,
    "X",
  ];
  const CombinacoesPossiveis7_X = [
    "X",
    null,
    null,
    null,
    "X",
    null,
    null,
    null,
    "X",
  ];
  const CombinacoesPossiveis8_X = [
    null,
    null,
    "X",
    null,
    "X",
    null,
    "X",
    null,
    null,
  ];
  const CombinacoesPossiveis1_O = [
    "O",
    "O",
    "O",
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  const CombinacoesPossiveis2_O = [
    null,
    null,
    null,
    "O",
    "O",
    "O",
    null,
    null,
    null,
  ];
  const CombinacoesPossiveis3_O = [
    null,
    null,
    null,
    null,
    null,
    null,
    "O",
    "O",
    "O",
  ];
  const CombinacoesPossiveis4_O = [
    "O",
    null,
    null,
    "O",
    null,
    null,
    "O",
    null,
    null,
  ];
  const CombinacoesPossiveis5_O = [
    null,
    "O",
    null,
    null,
    "O",
    null,
    null,
    "O",
    null,
  ];
  const CombinacoesPossiveis6_O = [
    null,
    null,
    "O",
    null,
    null,
    "O",
    null,
    null,
    "O",
  ];
  const CombinacoesPossiveis7_O = [
    "O",
    null,
    null,
    null,
    "O",
    null,
    null,
    null,
    "O",
  ];
  const CombinacoesPossiveis8_O = [
    null,
    null,
    "O",
    null,
    "O",
    null,
    "O",
    null,
    null,
  ];

  const [winBoard,setWinboard] = useState(0);
  const [buttonValues, setButtonValues] = useState(Array(81).fill(null)); //Todos os quadrados
  const [winsMainTab, setWinsMainTab] = useState(Array(9).fill(null)); //Quadrados grandes
  const [winner, setWinner] = useState(null); //Vencedor do jogo todo
  const [currentPlayer, setCurrentPlayer] = useState(props.choosenPlayer);
  const [fulFilled, setFulFilled] = useState(false);
  const [tabNumber, setTabNumber] = useState(""); //colocar o numero do tabuleiro onde jogou
  const [nextTabNumber, setNextTabNumber] = useState(10); //colocar o numero do tabuleiro onde deve jogar
  const [pcPlays, setPcPlays] = useState(false); //verifica se é a vez do pc jogar ou nao

  useEffect(() => {
    const player = currentPlayer=='X'? 'O' : 'X';
    if (checkWins(currentPlayer)) {
      const updatedWinsMainTab = [...winsMainTab]; // Cria uma copia do array
      updatedWinsMainTab[tabNumber - 1] = player; // Atualiza o elemento
      setWinsMainTab(updatedWinsMainTab);
      setWinboard(winBoard+1);
      return;
    }
    if (checkWinsMainGame(currentPlayer)) {
      setWinner(player);
      return;
    }
  }, [buttonValues]);

  useEffect(()=>{
    if (checkWinsMainGame(currentPlayer)) {
    if (checkWinsMainGame(currentPlayer)) {
        const player = currentPlayer=='X'? 'O' : 'X';
        setWinner(player);
        return;
      }
  }
},[winsMainTab]);

  useEffect(() =>{
    if(props.numberofplayers == false && ((currentPlayer != props.jogador1Simbolo)  && pcPlays== true )  ){//assim nao joga inicialmente porem se tirar o pcPlays == true joga 2 vezes
      var donePlay =0;//se a jogada for bem sucedida a variavel vai incrementar e sair do ciclo senao continua a testar até encontrar uma jogada valida
        do{
          const botPlay = Math.floor(Math.random() * 81);
          if (buttonValues[botPlay] === null) {
            const choosenBoard = Math.floor(botPlay % 9) + 1;
            const newTabNumber = Math.floor(botPlay / 9) + 1;
            setTabNumber(newTabNumber); //Calcula o numero do tabuleiro onde foi jogado de 1 a 9

            const newButtonValues = [...buttonValues];
              newButtonValues[botPlay] = currentPlayer;
      
            if (nextTabNumber === 10 || newTabNumber === nextTabNumber) {
      
              if(newButtonValues.toString() !== buttonValues.toString()){
                setFulFilled(true);
                setButtonValues(newButtonValues);
                checkWins(currentPlayer);
                checkWinsMainGame(currentPlayer);
                setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
                if (winsMainTab[choosenBoard-1] == null) {
                  setNextTabNumber(choosenBoard);
                } else {
                  setNextTabNumber(10);
                }
                donePlay=1;
                setPcPlays(false);
              }
            }
          }
        }while(donePlay == 0);
    }
  },[props.choosenPlayer,pcPlays]);//jogada do bot

  useEffect(() => {
    if(props.tempoFinalizado == true || props.gameOn == false){
      empate(winsMainTab);
    }
  },[props.tempoFinalizado,props.gameOn]);

  useEffect(() => {
    if(winBoard==9){
      empate(winsMainTab);
    }
  },[winsMainTab]);

  var decisiveX;
  var decisiveO;

  function empate(winsMainTab){
     decisiveX =0;
     decisiveO =0;

    for(var i=0;i<9;i++){
      if (winsMainTab[i]=="X"){
        decisiveX++;
      }
      if (winsMainTab[i]=="O"){
        decisiveO++;
      }
    }
    if(decisiveX>decisiveO){
      setWinner("X");
      return;
    }
    if(decisiveO>decisiveX){
      setWinner("O");
      return;
    }
    else{
      setWinner("empate");
    }
  }

  const compareArrays = (array1, array2) => {
    for (let i = 0; i < 9; i++) {
      if (array2[i] !== null && array1[i] !== array2[i]) {
        return false; // Arrays não são iguais
      }
    }
    return true; // Arrays são iguais
  };

  //Função para ver so ocorreu uma vitorias no X ou no O
  const checkWins = (currentPlayer) => {
    var win = 0;
    const slicedIndex = (tabNumber - 1) * 9;
    const selectedElements = buttonValues.slice(slicedIndex, slicedIndex + 9);
    // console.log(selectedElements);

    for (let i = 1; i <= 8; i++) {
      const combinacao = eval(`CombinacoesPossiveis${i}_X`);
      if (compareArrays(selectedElements, combinacao)) {
        console.log(`Match found with CombinacoesPossiveis${i}_X`);
        const updatedArray = [...winsMainTab];
        updatedArray[tabNumber - 1] = "X";
        setWinsMainTab(updatedArray);
        win = 1;
      }
    }
    if (win == 1) {
      return true;
    }

    for (let i = 1; i <= 8; i++) {
      const combinacao = eval(`CombinacoesPossiveis${i}_O`);
      if (compareArrays(selectedElements, combinacao)) {
        console.log(`Match found with CombinacoesPossiveis${i}_O`);
        const updatedArray = [...winsMainTab];
        updatedArray[tabNumber - 1] = "O";
        setWinsMainTab(updatedArray);
        win = 1;
      }
    }
    if (win == 1) {
      return true;
    }

    return false;
  };

  const checkWinsMainGame = (currentPlayer) => {
    const selectedElements = [...winsMainTab];
    var win = 0;
    for (let i = 1; i <= 8; i++) {
      const combinacao = eval(`CombinacoesPossiveis${i}_X`);
      if (compareArrays(selectedElements, combinacao)) {
        console.log(`Match found with CombinacoesPossiveis${i}_X`);
        setWinner("X");
        win = 1;
      }
    }
    if (win == 1) {
      return true;
    }
    for (let i = 1; i <= 8; i++) {
      const combinacao = eval(`CombinacoesPossiveis${i}_O`);
      if (compareArrays(selectedElements, combinacao)) {
        console.log(`Match found with CombinacoesPossiveis${i}_O`);
        setWinner("O");
        win = 1;
      }
    }
    if (win == 1) {
      return true;
    }
    return false;
  };

  const handleButtonClick = (index, currentPlayer) => {
    if (buttonValues[index] === null) {
      const choosenBoard = Math.floor(index % 9) + 1;
      const newTabNumber = Math.floor(index / 9) + 1;
      
      setTabNumber(newTabNumber); //Calcula o numero do tabuleiro onde foi jogado de 1 a 9

      if (nextTabNumber === 10 || newTabNumber === nextTabNumber) {

        setFulFilled(true);
        const newButtonValues = [...buttonValues];
        newButtonValues[index] = currentPlayer;
        setButtonValues(newButtonValues);
        checkWins(currentPlayer);
        checkWinsMainGame(currentPlayer);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        if (winsMainTab[choosenBoard-1] == null) {
          setNextTabNumber(choosenBoard);
        } else {
          setNextTabNumber(10);
        }
        if(props.numberofplayers === false){
        setPcPlays(true);}
      }
    }
  };

  return (
    <div id="mainPage">
      <section id="dataFromForm">
        <h1>Ultimate Tic Tac Toe</h1>
        <div id="recolha_dados">
          <a>Jogador 1:</a>
          <a>{props.jogador1} : {`${props.jogador1Simbolo === 'X' ? 'X' : 'O'}`}</a>
          <a>Jogador 2:</a>
          <a style={{display: props.numberofplayers === true ? "block" : "none",}}>{props.jogador2} : {`${props.jogador1Simbolo === 'X' ? 'O' : 'X'}`}</a>
          <a style={{display: props.numberofplayers === false ? "block" : "none",}}>PC : {`${props.jogador1Simbolo === 'X' ? 'O' : 'X'}`}</a>
          <a>Dificuldade:</a>
          <a>{props.dificulty}</a>
          <a>Jogador Atual:{currentPlayer}</a>
          <a>{props.dificulty == 'facil' ?(
                        <Temporizador tempo={120} changeTime={props.changeTime} changeGameOn={props.changeGameOn} empate={empate} winsMainTab={winsMainTab}/>
                    ) : (<Temporizador tempo={60} changeTime={props.changeTime} changeGameOn={props.changeGameOn}/>)} </a>
          <a>Resultado:</a>
          <a>{winner}</a>
          {/*<a>Tabuleiros ganhos por X:</a>
          <a>{decisiveX}</a>
          <a>Tabuleiros ganhos por O:</a>
          <a>{decisiveO}</a>*/}
        </div>
      </section>
      <section id="PainelJogo">
        {winner === null ? (
          <div id="NoveTabuleirosJogo">
            {[...Array(9)].map((_, tabIndex) => {
              const tabuleiroValue = winsMainTab[tabIndex];
              if (tabuleiroValue === null) {
                return (
                  <div
                    key={`TabuleiroJogo${tabIndex + 1}`}
                    className="Tabuleiros"
                  >
                    {[...Array(9)].map((_, buttonIndex) => {
                      const index = tabIndex * 9 + buttonIndex;
                      return (
                        <button
                          key={`Quadrado${index + 1}`}
                          onClick={() =>
                            handleButtonClick(index, currentPlayer)
                          }
                          className={`Quadrados Quadrados-${buttonValues[index]}`}
                        >
                          {buttonValues[index]}
                        </button>
                      );
                    })}
                  </div>
                );
              } else {
                return (
                  <div
                    key={`TabuleiroJogo${tabIndex + 1}`}
                    className={`Tabuleiros Tabuleiros-${tabuleiroValue}`}
                  >
                    {tabuleiroValue}
                  </div>
                );
              }
            })}
          </div>
        ) : (
          <div>
            <div key={`Winner`} className={`Winner-${winner}`}>
              {winner}
            </div>
          </div>
        )}
      </section>
      <section id="atualTopTen">
        <h1>Top 10:</h1>
      </section>
    </div>
  );
}
export default PainelJogo;
