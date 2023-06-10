import React from "react";
import  "./RBotaoStart.css";


function StartButton({menu,changeMenu}){
    return (
    <button className="ButtonC" onClick={changeMenu}>
        Start Game
    </button>);
}


export default StartButton;

