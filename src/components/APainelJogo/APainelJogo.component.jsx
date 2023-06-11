import React, { useEffect, useState } from "react";
import "./APainelJogo.css";
// import NoveTabuleirosJogo from "../components/A9TabuleirosJogo/A9TabuleirosJogo.component";
// import NoveTabuleirosJogo from "src\components\A9TabuleirosJogo\A9TabuleirosJogo.jsx";

function PainelJogo({ player1, player2 }) {
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

    //Função para ver so ocorreu uma vitorias no X ou nâo
    const checkWins_X = () => {
        for (let i = 1; i <= 8; i++) {
            const combinacao = eval(`CombinacoesPossiveis${i}_X`); // Get the CombinacoesPossiveis array dynamically
            if (compareArrays(buttonValues.slice(0, 9), combinacao)) {
                console.log(`Match found with CombinacoesPossiveis${i}_X`);

                // Do something when a match is found
            }
        }
    }

    //Função para ver so ocorreu uma vitorias no O ou nâo
    const checkWins_O = () => {
        let slicedIndex = 0;
        for (let i = 1; i <= 8; i++) {
            const combinacao = eval(`CombinacoesPossiveis${i}_O`); // Get the CombinacoesPossiveis array dynamically

            if (compareArrays(buttonValues.slice(slicedIndex, slicedIndex+9), combinacao)) {
                console.log(`Match found with CombinacoesPossiveis${i}_O`);
                // Do something when a match is found
            }
            slicedIndex += 9;
        }
    }

    const handleButtonClick = (index) => {
        if(buttonValues[index] == null){
            setFulFilled(true);
            const newButtonValues = [...buttonValues];
            newButtonValues[index] = currentPlayer;
            setButtonValues(newButtonValues);
            if(currentPlayer === "X"){
                {checkWins_X()};
            }
            if(currentPlayer === "O"){
                {checkWins_O()};
            }
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
        
        // console.log(buttonValues);
    };

    return (
        <section id="PainelJogo">
            <div id="NoveTabuleirosJogo">
                {[...Array(9)].map((_, tabIndex) => (
                    <div key={`TabuleiroJogo${tabIndex + 1}`} className="Tabuleiros">
                        {[...Array(9)].map((_, buttonIndex) => {
                            const index = tabIndex * 9 + buttonIndex;
                            return (
                            <button
                                key={`Quadrado${index + 1}`}
                                className={`Quadrados Quadrados-${buttonValues[index]}`}
                                onClick={() => handleButtonClick(index)}
                            >
                                {buttonValues[index]}
                            </button>
                            );
                        })}
                    </div>
                ))}
            </div>
        </section>
    );
  }

export default PainelJogo;