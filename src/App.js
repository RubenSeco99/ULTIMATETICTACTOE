import "./assets/styles/App.css";
import React, { useState } from "react";
import Indice from "./components/RIndice/RIndice.component";
import ImagemJogo from "./components/RImagemEcraInicial/RImagemEcraInicial";
import StartButton from "./components/RBotaoStart/RBotaoStart.component";
import TopTenButton from "./components/RBotaoVerTop10/RBotaoVerTop10.component";
import ModoDeJogo from "./components/DEcraModoJogo/DEcraModoJogo.component";

function App() {
  const [menu, setMenu] = useState("appRDisplay");
  function changeMenu(event) {
    //se se clicar no botao start game na pagina inicial mostra para a pagina de pedir dados
      event.preventDefault();//garante que não acontece mais nada alem daquilo que queremos 
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
          <ModoDeJogo />
        </div>

    </div>
  );
}

export default App;
