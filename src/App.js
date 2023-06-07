import "./assets/styles/App.css";
import APainelJogo from "./components/APainelJogo/APainelJogo.component";

function App() {
  return (
    <div id="container">
      <h2>Ultimate TIC TAC TOE em React</h2>
      <h3>Linguagens Script</h3>
      APainelJogo={APainelJogo}
    </div>
  );
}

export default App;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida 
// export default function App() {
