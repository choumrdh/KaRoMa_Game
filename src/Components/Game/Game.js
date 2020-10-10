import React, { Component } from "react";
import GameWeaponCard from "../GameWeaponCard/GameWeaponCard";
import Counter from "../Counter/Counter";
import GameResult from "../GameResult/GameResult";
// import SaveBtn from "../SaveBtn/SaveBtn";
import WinnngRateBtn from "../WinningRateBtn/WinningRateBtn"
import "./Game.css";

class Game extends Component {
  state = {
    playerWinCount: 0,
    computerWinCount: 0,
    tieCount:0,
    gameRound:0,
    computerResult: null,
    gameResult: null
  };
  //   0 = karen
  //   1 = rona
  //   2 = mask

  computerChoice = () => {
    let choiceIndex = Math.floor(Math.random() * 3);
    if (choiceIndex === 0) {
      this.setState({computerResult:"karen"})
      return "karen";
    } else if (choiceIndex === 1) {
      this.setState({computerResult:"rona"})
      return "rona";
    } else {
      this.setState({computerResult:"mask"});
      return "mask";
    }
  };

  onKaren = () => {
    let choice = this.computerChoice();
    if (choice === "karen") {
      this.setState({tieCount:this.state.tieCount+1, gameRound:this.state.gameRound+1})
      this.setState({gameResult:"Its a tie"})
    } else if (choice === "rona") {
      this.setState({ computerWinCount: this.state.computerWinCount + 1, gameRound:this.state.gameRound+1 });
      this.setState({gameResult:"You Lost"})
    } else {
      this.setState({ playerWinCount: this.state.playerWinCount + 1, gameRound:this.state.gameRound+1 });
      this.setState({gameResult:"You Win"})
    }
  };

  onRona = () => {
    let choice = this.computerChoice();
    if (choice === "rona") {
      this.setState({tieCount:this.state.tieCount+1, gameRound:this.state.gameRound+1})
      this.setState({gameResult:"Its a tie"})
    } else if (choice === "karen") {
      this.setState({ playerWinCount: this.state.playerWinCount + 1, gameRound:this.state.gameRound+1});
      this.setState({gameResult:"You Win"})
    } else {
      this.setState({ computerWinCount: this.state.computerWinCount + 1, gameRound:this.state.gameRound+1 });
      this.setState({gameResult:"You Lost"})
    }
  };
  onMask = () => {
    let choice = this.computerChoice();
    if (choice === "mask") {
      this.setState({tieCount:this.state.tieCount+1, gameRound:this.state.gameRound+1})
      this.setState({gameResult:"Its a tie"})
    } else if (choice === "karen") {
      this.setState({ computerWinCount: this.state.computerWinCount + 1, gameRound:this.state.gameRound+1 });
      this.setState({gameResult:"You Lost"})
    } else {
      this.setState({ playerWinCount: this.state.playerWinCount + 1, gameRound:this.state.gameRound+1 });
      this.setState({gameResult:"You Win"})
    }
  };
  render() {
    return (
      <>
        <Counter 
        gameRound= {this.state.gameRound}
        tieCount={this.state.tieCount}
        playerWinCount={this.state.playerWinCount}
        computerWinCount={this.state.computerWinCount}
        />
        <GameWeaponCard
        computerResult={this.state.computerResult}
        onKaren={this.onKaren}
        onRona={this.onRona}
        onMask={this.onMask}/>
        <GameResult gameResult={this.state.gameResult}/>
        {/* <SaveBtn 
        user={this.props.user}
        playerWinCount={this.state.playerWinCount}
        computerWinCount={this.state.computerWinCount}
        totalGamePlayed={this.state.gameRound}
        /> */}
        <WinnngRateBtn/>
      </>
    );
  }
}

export default Game;
