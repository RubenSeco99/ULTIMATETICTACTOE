import "./assets/styles/AppR.css";
import React, { useState } from "react";
import Indice from "./components/RIndice/RIndice.component";
import ImagemJogo from "./components/RImagemEcraInicial/RImagemEcraInicial";
import StartButton from "./components/RBotaoStart/RBotaoStart.component";
import TopTenButton from "./components/RBotaoVerTop10/RBotaoVerTop10.component";

function AppR() {
  const [menu, setMenu] = useState("appRDisplay");
  function changeMenu(event) {
    //se se clicar no botao start game na pagina inicial vai para a pagina de pedir dados
      event.preventDefault();
      setMenu("appDDisplay");
    
  }
  return (
    <div id="main">
        <div id="appRDisplay" style={{ display: menu === 'appDDisplay' ? 'none' : 'flex' }}>
          <ImagemJogo />
          <TopTenButton/>
          <StartButton changeMenu={changeMenu}/>
          <footer id="Indice">
            <Indice />
          </footer>
        </div>
      
        <div id="appDDisplay" style={{ display: menu === 'appDDisplay' ? 'flex' : 'none' }}>
          <h1>Entrou appDDisplay</h1>
        </div>
      
    </div>
  );
}

export default AppR;
