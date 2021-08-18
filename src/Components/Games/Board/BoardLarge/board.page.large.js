import React, { Component } from "react";
import "./board.page.large.css";
import GameMenu from "../../../GameMenu/game.menu";
import GamesPageHomeButton from "../../../Games/HomeButton/games.page.large.home.button";
import ScheduleModal from "../../ScheduleModal/ScheduleModal";

class BoardPageLarge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      pageType: "Board game",
      fontStyle: "bold",
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    return (
      <div id="BoardPageLarge">
        <GameMenu />
        <h1 id="boardGamesTitle">Board Games</h1>
        <div id="GameBoard"><img id = "boardGameImage" src = {`${process.env.PUBLIC_URL}/images/boardGameImage.png`} alt = "board game"/></div>
        <GamesPageHomeButton />
        <ScheduleModal 
            show = {this.state.show}
            pageType = {this.state.pageType}
            saturdayFontStyle = {this.state.fontStyle}
            handleClose = {this.handleClose}
        />
        <button id="scheduleButtonLarge" onClick={this.handleShow}>
          Schedule
        </button>
      </div>
    );
  }
}

export default BoardPageLarge;
