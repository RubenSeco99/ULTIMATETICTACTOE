import React, { useEffect, useState } from "react";
import "./DTemporizador.css";

function Temporizador(props) {
    const [tempoRestante_X, setTempoRestante_X] = useState(120);
    const [tempoRestante_O, setTempoRestante_O] = useState(120);
    const [contadorAtivo, setContadorAtivo] = useState(true);
    const [tempoInicial_X, setTempoInicial_X] = useState(120);
    const [tempoInicial_O, setTempoInicial_O] = useState(120);

    useEffect(() => {
        let intervalId;
    
        if (contadorAtivo && !props.pausarContador_X) {
          intervalId = setInterval(() => {
                setTempoRestante_X((prevTempo) => {
                    if (prevTempo > 0) {
                        return prevTempo - 1;
                    } else {
                        setContadorAtivo(false);
                        return 0;
                    }
                });
          }, 1000);
        }
    
        return () => clearInterval(intervalId);
    }, [contadorAtivo, props.pausarContador_X]);


    useEffect(() => {
        let intervalId;
    
        if (contadorAtivo && !props.pausarContador_O) {
            intervalId = setInterval(() => {
                setTempoRestante_O((prevTempo) => {
                    if (prevTempo > 0) {
                        return prevTempo - 1;
                    } else {
                        setContadorAtivo(false);
                        return 0;
                    }
                });
            }, 1000);
        }
    
        return () => clearInterval(intervalId);
    }, [contadorAtivo, props.pausarContador_O]);

    useEffect(() => {
        if (props.currentPlayer === "X") {
            setContadorAtivo(true);
            setTempoInicial_X(tempoRestante_X);
        } else {
            setContadorAtivo(false);
        }
    }, [props.currentPlayer, tempoRestante_X]);

    useEffect(() => {
        if (props.currentPlayer === "O") {
            setContadorAtivo(true);
            setTempoInicial_O(tempoRestante_O);
        } else {
            setContadorAtivo(false);
        }
    }, [props.currentPlayer, tempoRestante_O]);

    const formatarTempo = (tempo) => {
        const minutos = Math.floor(tempo / 60);
        const segundos = tempo % 60;

        return `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
    };

    return (
        // <div className={`temporizador-container ${contadorAtivo ? "ativo" : ""}`}>
        //   <div className="temporizador-display">{formatarTempo(tempoRestante)}</div>
        //   {!contadorAtivo && <button onClick={() => setContadorAtivo(true)}>Iniciar</button>}
        //   {contadorAtivo && <button onClick={pausarTemporizador}>Pausar</button>}
        // </div>
        <div className={`temporizador-container ${props.currentPlayer}`}>
            {props.currentPlayer === "X" ? <div className="temporizador-display">{formatarTempo(tempoRestante_X)}</div> : <div className="temporizador-display">{formatarTempo(tempoRestante_O)}</div>}
            {/* <div className="temporizador-display">{formatarTempo(tempoRestante_X)}</div>
            {(contadorAtivo === true ) ? 
                <div className="temporizador-display">{formatarTempo(tempoRestante_X)}</div> : <div className="temporizador-display">{formatarTempo(tempoRestante_X)}</div>
            } */}
        </div>
    );
}

export default Temporizador;
