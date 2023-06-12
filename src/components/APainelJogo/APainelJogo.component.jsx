import React, { useEffect, useState } from "react";
import "./APainelJogo.css";
// import NoveTabuleirosJogo from "../components/A9TabuleirosJogo/A9TabuleirosJogo.component";
// import NoveTabuleirosJogo from "src\components\A9TabuleirosJogo\A9TabuleirosJogo.jsx";

function PainelJogo(props) {
    const CombinacoesPossiveis1_X = ['X', 'X', 'X', null, null, null, null, null, null];
    const CombinacoesPossiveis2_X = [null, null, null, 'X', 'X', 'X', null, null, null];
    const CombinacoesPossiveis3_X = [null, null, null, null, null, null, 'X', 'X', 'X'];
    const CombinacoesPossiveis4_X = ['X', null, null, 'X', null, null, 'X', null, null];
    const CombinacoesPossiveis5_X = [null, 'X', null, null, 'X', null, null, 'X', null];
    const CombinacoesPossiveis6_X = [null, null, 'X', null, null, 'X', null, null, 'X'];
    const CombinacoesPossiveis7_X = ['X', null, null, null, 'X', null, null, null, 'X'];
    const CombinacoesPossiveis8_X = [null, null, 'X', null, 'X', null, 'X', null, null];
   
    const CombinacoesPossiveis1_O = ['O', 'O', 'O', null, null, null, null, null, null];
    const CombinacoesPossiveis2_O = [null, null, null, 'O', 'O', 'O', null, null, null];
    const CombinacoesPossiveis3_O = [null, null, null, null, null, null, 'O', 'O', 'O'];
    const CombinacoesPossiveis4_O = ['O', null, null, 'O', null, null, 'O', null, null];
    const CombinacoesPossiveis5_O = [null, 'O', null, null, 'O', null, null, 'O', null];
    const CombinacoesPossiveis6_O = [null, null, 'O', null, null, 'O', null, null, 'O'];
    const CombinacoesPossiveis7_O = ['O', null, null, null, 'O', null, null, null, 'O'];
    const CombinacoesPossiveis8_O = [null, null, 'O', null, 'O', null, 'O', null, null];
   

    const [buttonValues, setButtonValues] = useState(Array(81).fill(null));
    const [winsMainTab, setWinsMainTab] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [fulFilled, setFulFilled] = useState(false);
    
    // const VerifyFulFilled = (fulFilled) => {
    //     return 0;
    // }

    const compareArrays = (array1, array2) => {
        for (let i = 0; i < 9; i++) {
            if (array2[i] !== null && array1[i] !== array2[i]) {
                return false; // Arrays are not equal
            }
        }
        return true; // Arrays are equal
    };

    //Função para ver so ocorreu uma vitorias no X ou no O 
    const checkWins = (currentPlayer, TabNumber) => {
        // if(TabNumber === 1 || TabNumber === 2 || TabNumber === 3){
        //     var slicedIndex = (3*(TabNumber-1));
        // }
        // if(TabNumber === 4 || TabNumber === 5 || TabNumber === 6){
        //     var slicedIndex = (3*(TabNumber-1)) + 18;
        // }
        // if(TabNumber === 7 || TabNumber === 8 || TabNumber === 9){
        //     var slicedIndex = (3*(TabNumber-1)) + 36;
        // }
        const slicedIndex = (TabNumber-1)*9;
        // const selectedElements = buttonValues.slice(slicedIndex, slicedIndex+3).concat(buttonValues.slice(slicedIndex+9, slicedIndex+12)).concat(buttonValues.slice(slicedIndex+18, slicedIndex+21));
        const selectedElements = buttonValues.slice(slicedIndex, slicedIndex+9);
        // console.log(selectedElements);
        if(currentPlayer === "X"){
            for (let i = 1; i <= 8; i++) {
                const combinacao = eval(`CombinacoesPossiveis${i}_X`); // Get the CombinacoesPossiveis array dynamically

                if (compareArrays(selectedElements, combinacao)) {
                    console.log(`Match found with CombinacoesPossiveis${i}_X`);
                    // Do something when a match is found
                    const updatedArray = [...winsMainTab];
                    updatedArray[TabNumber-1] = "X";
                    setWinsMainTab(updatedArray);
                    // return setWinsMainTab;
                }
                
            }
        }
        if(currentPlayer === "O"){
            for (let i = 1; i <= 8; i++) {
                const combinacao = eval(`CombinacoesPossiveis${i}_O`); // Get the CombinacoesPossiveis array dynamically
    
                if (compareArrays(selectedElements, combinacao)) {
                    console.log(`Match found with CombinacoesPossiveis${i}_O`);
                    // setWinsMainTab(prevArray => prevArray.map((item, i) => i === index ? 'O' : item));
                    // Do something when a match is found
                    const updatedArray = [...winsMainTab];
                    updatedArray[TabNumber-1] = "O";
                    setWinsMainTab(updatedArray);
                    // return setWinsMainTab;
                }
            }
        }
    }

    const checkWinsMainGame = (currentPlayer, TabNumber) => {
        const selectedElements = winsMainTab;
        if(currentPlayer === "X"){
            for (let i = 1; i <= 8; i++) {
                const combinacao = eval(`CombinacoesPossiveis${i}_X`); // Get the CombinacoesPossiveis array dynamically

                if (compareArrays(selectedElements, combinacao)) {
                    console.log(`Match found with CombinacoesPossiveis${i}_X`);
                    setWinner = ("X");
                }
                
            }
        }
        if(currentPlayer === "O"){
            for (let i = 1; i <= 8; i++) {
                const combinacao = eval(`CombinacoesPossiveis${i}_O`); // Get the CombinacoesPossiveis array dynamically
    
                if (compareArrays(selectedElements, combinacao)) {
                    console.log(`Match found with CombinacoesPossiveis${i}_O`);
                    setWinner = ("O");
                }
            }
        }
    }

    const handleButtonClick = (index, currentPlayer) => {
        if(buttonValues[index] == null){
            setFulFilled(true);
            const newButtonValues = [...buttonValues];
            newButtonValues[index] = currentPlayer;
            setButtonValues(newButtonValues);
            const TabNumber = Math.floor(index / 9) + 1;    //Calcula o numbero do tabuleiro onde foi jogado de 1 a 9
            {checkWins(currentPlayer, TabNumber)};
            {checkWinsMainGame(currentPlayer, TabNumber)};
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
        // console.log(buttonValues);
        // console.log(winsMainTab);
    };

    return (
        <div id="mainPage">
        <section id="dataFromForm">
            <h1>Ultimate Tic Tac Toe</h1>
            <div id="recolha_dados">
                    <a>Jogador 1:</a>
                    <a>{props.jogador1}</a>
                    <a style={{ display: props.numberofplayers === true ? "block" : "none" }}>Jogador 2:</a>
                    <a>{props.jogador2}</a>
                    <a>Dificuldade:</a>
                    <a>{props.dificulty}</a>
            </div>
        </section>
        <section id="PainelJogo">
            const winnerValues = winner;
            if(winnerValues === null) {
                <div id="NoveTabuleirosJogo">
                    {[...Array(9)].map((_, tabIndex) => {
                        const tabuleiroValue = winsMainTab[tabIndex];
                        if(tabuleiroValue === null){
                            return (
                                <div key={`TabuleiroJogo${tabIndex + 1}`} className="Tabuleiros">
                                    {[...Array(9)].map((_, buttonIndex) => {
                                        const index = tabIndex * 9 + buttonIndex;
                                        return (
                                            <button
                                                key={`Quadrado${index + 1}`}
                                                className={`Quadrados Quadrados-${buttonValues[index]}`}
                                                onClick={() => handleButtonClick(index, currentPlayer)}
                                            >
                                                {buttonValues[index]}
                                            </button>
                                        );
                                    })}
                                </div>
                            );
                            
                        } else {
                            return (
                                <div key={`TabuleiroJogo${tabIndex + 1}`} className={`Tabuleiros Tabuleiros-${tabuleiroValue}`}>
                                    {tabuleiroValue}
                                </div>
                            );
                        }
                    })}
                </div>
            } else {
                <div>
                    return (
                        <div key={`Winner`} className={`Winner-${winner}`}>
                            {winner}
                        </div>
                    );
                </div>
            }
        </section>
        <section id="atualTopTen">
            <h1>Top 10:</h1>
        </section>
        </div>
    );
    // return (
    //     <div id="mainPage">
    //     <section id="dataFromForm">
    //         <h1>Ultimate Tic Tac Toe</h1>
    //         <div id="recolha_dados">
    //                 <a>Jogador 1:</a>
    //                 <a>{props.jogador1}</a>
    //                 <a style={{ display: props.numberofplayers === true ? "block" : "none" }}>Jogador 2:</a>
    //                 <a>{props.jogador2}</a>
    //                 <a>Dificuldade:</a>
    //                 <a>{props.dificulty}</a>
    //         </div>
    //     </section>
    //     <section id="PainelJogo">
    //         <div id="NoveTabuleirosJogo">
    //             {[...Array(9)].map((_, tabIndex) => {
    //                 const tabuleiroValue = winsMainTab[tabIndex];
    //                 if(tabuleiroValue === null){
    //                     return (
    //                         <div key={`TabuleiroJogo${tabIndex + 1}`} className="Tabuleiros">
    //                             {[...Array(9)].map((_, buttonIndex) => {
    //                                 const index = tabIndex * 9 + buttonIndex;
    //                                 return (
    //                                     <button
    //                                         key={`Quadrado${index + 1}`}
    //                                         className={`Quadrados Quadrados-${buttonValues[index]}`}
    //                                         onClick={() => handleButtonClick(index, currentPlayer)}
    //                                     >
    //                                         {buttonValues[index]}
    //                                     </button>
    //                                 );
    //                             })}
    //                         </div>
    //                     );
                        
    //                 } else {
    //                     return (
    //                         <div key={`TabuleiroJogo${tabIndex + 1}`} className={`Tabuleiros Tabuleiros-${tabuleiroValue}`}>
    //                             {tabuleiroValue}
    //                         </div>
    //                     );
    //                 }
    //             })}
    //         </div>
    //     </section>
    //     <section id="atualTopTen">
    //     <h1>Top 10:</h1>
    //     </section>
    //     </div>
    // );
  }
export default PainelJogo;

// import React, { useEffect, useState } from "react";
// import "./APainelJogo.css";

// function PainelJogo({ player1, player2 }) {
//   const CombinacoesPossiveis = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//     [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//     [0, 4, 8], [2, 4, 6] // Diagonals
//   ];

//   const [buttonValues, setButtonValues] = useState(Array(81).fill(null));
//   const [winsMainTab, setWinsMainTab] = useState(Array(9).fill(null));
//   const [currentPlayer, setCurrentPlayer] = useState("X");

//   const checkWins = (tabIndex) => {
//     const slicedIndex = tabIndex * 9;
//     const selectedElements = buttonValues.slice(slicedIndex, slicedIndex + 9);

//     for (let i = 0; i < CombinacoesPossiveis.length; i++) {
//       const [a, b, c] = CombinacoesPossiveis[i];
//       if (
//         selectedElements[a] &&
//         selectedElements[a] === selectedElements[b] &&
//         selectedElements[a] === selectedElements[c]
//       ) {
//         return selectedElements[a];
//       }
//     }

//     return null;
//   };

// //   const handleButtonClick = (index) => {
// //     if (buttonValues[index] == null) {
// //       const newButtonValues = [...buttonValues];
// //       newButtonValues[index] = currentPlayer;
// //       setButtonValues(newButtonValues);

// //       const tabIndex = Math.floor(index / 9);
// //       const winner = checkWins(tabIndex);

// //       if (winner) {
// //         const updatedArray = [...winsMainTab];
// //         updatedArray[tabIndex] = winner;
// //         setWinsMainTab(updatedArray);
// //       }

// //       setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
// //     }
// //   };
//     const handleButtonClick = (index) => {
//         if (buttonValues[index] == null) {
//             const newButtonValues = [...buttonValues];
//             newButtonValues[index] = currentPlayer;
//             setButtonValues(newButtonValues);
        
//             const tabIndex = Math.floor(index / 9);
//             const winner = checkWins(tabIndex, newButtonValues);
        
//             if (winner) {
//                 const updatedArray = [...winsMainTab];
//                 updatedArray[tabIndex] = winner;
//                 setWinsMainTab(updatedArray);
//             }
        
//             setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
//         }
//     };
  
  
  

//   return (
//     <section id="PainelJogo">
//       <div id="NoveTabuleirosJogo">
//         {[...Array(9)].map((_, tabIndex) => {
//           const tabuleiroValue = winsMainTab[tabIndex];

//           if (tabuleiroValue === null) {
//             return (
//               <div key={`TabuleiroJogo${tabIndex + 1}`} className="Tabuleiros">
//                 {[...Array(9)].map((_, buttonIndex) => {
//                   const index = tabIndex * 9 + buttonIndex;

//                   return (
//                     <button
//                       key={`Quadrado${index + 1}`}
//                       className={`Quadrados Quadrados-${buttonValues[index]}`}
//                       onClick={() => handleButtonClick(index)}
//                     >
//                       {buttonValues[index]}
//                     </button>
//                   );
//                 })}
//               </div>
//             );
//           } else {
//             return (
//               <div
//                 key={`TabuleiroJogo${tabIndex + 1}`}
//                 className={`Tabuleiros Tabuleiros-${tabuleiroValue}`}
//               >
//                 {tabuleiroValue}
//               </div>
//             );
//           }
//         })}
//       </div>
//     </section>
//   );
// }

// export default PainelJogo;
