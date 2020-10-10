import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import WinRateResult from "./WinRateResult";
import "./WinningRateBtn.css";

class WinningRateBtn extends Component {
  state = {
    winRate: null,
  };

  getWinRate = () => {
    let rate = (this.props.playerWinCount / this.props.totalGamePlayed).toFixed(2);
    this.setState({winRate:rate})
    console.log(this.state.winRate);
  };
  render() {
    return (
      <div className="winButton">
        <Button variant="contained" color="secondary" onClick={this.getWinRate}>
          Winning Rate
        </Button>
        <WinRateResult winRate={this.state.winRate} />
      </div>
    );
  }
}

export default WinningRateBtn;
