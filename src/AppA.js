import "./assets/styles/AppA.css";
import PainelJogo from "./components/APainelJogo/APainelJogo.component";
// import NoveTabuleirosJogo from "./components/A9TabuleirosJogo/A9TabuleirosJogo.component";

function AppA() {
  return (
    <div id="main">
      {/* <h2>Ultimate TIC TAC TOE em React</h2>
      <h3>Linguagens Script</h3> */}
      
      <PainelJogo/>
    </div>
  );
}

export default AppA;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida 
// export default function App() {
