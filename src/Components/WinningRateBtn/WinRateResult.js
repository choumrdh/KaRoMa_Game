import React from 'react';

const WinRateResult = (props)=>{
    console.log(props);

    return(
        <div className="win-rate-result">
           <div>{props.winRate}</div>
        </div>
        
    )
};

export default WinRateResult;