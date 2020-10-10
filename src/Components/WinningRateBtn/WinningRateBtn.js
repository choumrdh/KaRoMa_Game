import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class WinningRateBtn extends Component {
    state={
        winRate: null
    }
   
    // saveData=()=>{
    //     let newGame = {
    //         player: this.props.user,
    //         playerWinCount:this.props.playerWinCount,
    //         computerWinCount: this.props.computerWinCount,
    //         totalGamePlayed:this.props.totalGamePlayed,
    //         winRate:this.getWinRate()
    //     }
    //     API.createGame({newGame}).then((res)=>{
    //         console.log("success saving game data",res)
    //     })
    // }
    getWinRate=()=>{
        let rate =(this.props.playerWinCount/this.props.totalGamePlayed).toFixed(2)
        let message = <h4>`Your Win Rate is ${rate}%`</h4>
        return message
    }
    render() { 
        return ( 
            <div className="saveButton">
                <Button variant="contained" color="secondary"
                onClick={this.getWinRate}>See Rate</Button>
            </div>
         );
    }
}
 
export default WinningRateBtn;