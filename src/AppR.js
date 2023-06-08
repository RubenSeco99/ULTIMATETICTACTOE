import "./assets/styles/AppR.css";
import Indice from "./components/RIndice/RIndice.component";
import ImagemJogo from "./components/RImagemEcraInicial/RImagemEcraInicial";
import StartButton from "./components/RBotaoStart/RBotaoStart.component";
import TopTenButton from "./components/RBotaoVerTop10/RBotaoVerTop10.component";

function AppR() {
  return (
    <div id="container">
      <ImagemJogo/>
      <TopTenButton></TopTenButton>
    <StartButton></StartButton>
      <footer id="Indice">
      <Indice />
    </footer>
    </div>
    
  );
}

export default AppR;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida 
// export default function App() {
