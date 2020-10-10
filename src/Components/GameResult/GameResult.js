import React from 'react';
import "./GameResult.css"

const GameResult = (props)=>{
    return(
        <div className="gameResult">
           {props.gameResult} 
        </div>
        
    )
};

export default GameResult