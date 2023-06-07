import React from "react";
import "./APainelJogo.css";
// import NoveTabuleirosJogo from "../components/A9TabuleirosJogo/A9TabuleirosJogo.component";
// import NoveTabuleirosJogo from "src\components\A9TabuleirosJogo\A9TabuleirosJogo.jsx";

function PainelJogo(){
    return (
        <section id="PainelJogo">
            <div id="NoveTabuleirosJogo">
                <div id="TabuleiroJogo1" className="Tabuleiros"></div>
                <div id="TabuleiroJogo2" className="Tabuleiros"></div>
                <div id="TabuleiroJogo3" className="Tabuleiros"></div>
                <div id="TabuleiroJogo3" className="Tabuleiros"></div>
                <div id="TabuleiroJogo4" className="Tabuleiros"></div>
                <div id="TabuleiroJogo5" className="Tabuleiros"></div>
                <div id="TabuleiroJogo6" className="Tabuleiros"></div>
                <div id="TabuleiroJogo7" className="Tabuleiros"></div>
                <div id="TabuleiroJogo8" className="Tabuleiros"></div>
                <div id="TabuleiroJogo9" className="Tabuleiros"></div>
            </div>
        </section>
    );
}

export default PainelJogo;