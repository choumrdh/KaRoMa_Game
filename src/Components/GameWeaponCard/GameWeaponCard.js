import React from "react";
import ComputerChoice from "../ComputerChoice/ComputerChoice";
import "./GameWeaponCard.css";

const GameWeaponCard = (props) => {
  return (
    <div className="wrapper">
      <div className="cardMedia boxLeft">
        <button onClick={props.onKaren}>
        <img
          src={process.env.PUBLIC_URL + "images/karen-icon.png"}
          alt="Karen"
        />
      </button>
      <button onClick={props.onRona}>
        <img
          src={process.env.PUBLIC_URL + "images/rona-icon.png"}
          alt="Rona"
        />
      </button>
      <button onClick={props.onMask}>
        <img src={process.env.PUBLIC_URL + "images/mask-icon.png"} 
        alt="Mask" 
        />
      </button>
      </div>
      <div className="boxRight">
        <ComputerChoice computerResult={props.computerResult}/>
      </div>
      
    </div>
  );
};

export default GameWeaponCard;
