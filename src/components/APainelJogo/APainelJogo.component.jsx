import React, { useEffect, useState } from "react";
import "./APainelJogo.css";

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

  const [buttonValues, setButtonValues] = useState(Array(81).fill(null)); //Todos os quadrados
  const [winsMainTab, setWinsMainTab] = useState(Array(9).fill(null)); //Quadrados grandes
  const [winner, setWinner] = useState(null); //Vencedor do jogo todo
  const [currentPlayer, setCurrentPlayer] = useState("X");
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
      return;
    }
    if (checkWinsMainGame(currentPlayer)) {
      setWinner(player);
      return;
    }
  }, [buttonValues]);

  useEffect(()=>{if (checkWinsMainGame(currentPlayer)) {
    if (checkWinsMainGame(currentPlayer)) {
        const player = currentPlayer=='X'? 'O' : 'X';
        setWinner(player);
        return;
      }
  }},[winsMainTab]);




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
      var winboard = 0;
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
      }
    }
  };

  return (
    <div id="mainPage">
      <section id="dataFromForm">
        <h1>Ultimate Tic Tac Toe</h1>
        <div id="recolha_dados">
          <a>Jogador 1:</a>
          <a>{props.jogador1}</a>
          <a
            style={{
              display: props.numberofplayers === true ? "block" : "none",
            }}
          >
            Jogador 2:
          </a>
          <a>{props.jogador2}</a>
          <a>Dificuldade:</a>
          <a>{props.dificulty}</a>
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
