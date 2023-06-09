import React from "react";
import "./DPainelJogadores.css";
import trofeu from "../images/icons8-troféu-60-removebg-preview.png";

function PainelJogadores() {
  return (
    <div className="top-players-panel">
      <h2 className="panel-heading">
        <img src={trofeu} alt="Troféu" className="trophy-icon" />
        Classificação
      </h2>
      <ul className="player-list">
        <li className="player-item">
          <span className="player-rank">1.</span>
          <span className="player-name">John Doe</span>
          <span className="player-score">V: 10 | D: 2 | E: 3</span>
        </li>
        <li className="player-item">
          <span className="player-rank">2.</span>
          <span className="player-name">Jane Smith</span>
          <span className="player-score">V: 8 | D: 4 | E: 1</span>
        </li>
        <li className="player-item">
          <span className="player-rank">3.</span>
          <span className="player-name">Michael Johnson</span>
          <span className="player-score">V: 7 | D: 3 | E: 2</span>
        </li>
        <li className="player-item">
          <span className="player-rank">4.</span>
          <span className="player-name">Emily Brown</span>
          <span className="player-score">V: 6 | D: 1 | E: 4</span>
        </li>
        <li className="player-item">
          <span className="player-rank">5.</span>
          <span className="player-name">David Wilson</span>
          <span className="player-score">V: 5 | D: 2 | E: 1</span>
        </li>
        <li className="player-item">
          <span className="player-rank">6.</span>
          <span className="player-name">Sophia Davis</span>
          <span className="player-score">V: 4 | D: 3 | E: 0</span>
        </li>
        <li className="player-item">
          <span className="player-rank">7.</span>
          <span className="player-name">Daniel Miller</span>
          <span className="player-score">V: 3 | D: 2 | E: 2</span>
        </li>
        <li className="player-item">
          <span className="player-rank">8.</span>
          <span className="player-name">Olivia Martinez</span>
          <span className="player-score">V: 2 | D: 4 | E: 1</span>
        </li>
        <li className="player-item">
          <span className="player-rank">9.</span>
          <span className="player-name">Matthew Clark</span>
          <span className="player-score">V: 1 | D: 2 | E: 3</span>
        </li>
        <li className="player-item">
          <span className="player-rank">10.</span>
          <span className="player-name">Isabella Taylor</span>
          <span className="player-score">V: 0 | D: 1 | E: 2</span>
        </li>
      </ul>
    </div>
  );
}

export default PainelJogadores;
