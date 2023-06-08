import React, { useState } from "react";
import "./APainelJogo.css";
// import NoveTabuleirosJogo from "../components/A9TabuleirosJogo/A9TabuleirosJogo.component";
// import NoveTabuleirosJogo from "src\components\A9TabuleirosJogo\A9TabuleirosJogo.jsx";

function PainelJogo({ player }) {
    const [buttonValues, setButtonValues] = useState(Array(81).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
  
    const handleButtonClick = (index) => {
      const newButtonValues = [...buttonValues];
      newButtonValues[index] = currentPlayer;
      setButtonValues(newButtonValues);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
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
                    className="Quadrados"
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