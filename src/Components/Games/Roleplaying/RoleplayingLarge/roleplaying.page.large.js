import React, { Component } from "react";
import GameMenu from "../../../GameMenu/game.menu";
import GamePagesHomeButton from "../../HomeButton/games.page.large.home.button";
import ScheduleModal from "../../ScheduleModal/ScheduleModal";
import "./roleplaying.page.large.css";

class RolePlayingLarge extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      pageType: "Roleplaying",
      fontStyle: "bold"
    }
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  render() {
    return (
      <div id="RoleplayingLarge">
        <GameMenu />
        <h1 id="roleplayTableText">Play games like these and more!</h1>
        <div id="gameTableSurface">
          <div id="dmScreen">
            <div id="screenOne" />
            <div id="screenTwo">
              Dungeon
              <br /> Master
            </div>
            <div id="screenThree" />
          </div>
          <div id="gameTableSurfaceOne" />
          <div id="gameTableSurfaceTwo" />
          <div id="CharacterSheet">
            <img
              id="characterSheetImage"
              alt="character sheet"
              src={`${process.env.PUBLIC_URL}/images/D&DCharacterSheet.png`}
            />
          </div>
        </div>
        <GamePagesHomeButton />
        <ScheduleModal
          show = {this.state.show}
          pageType = {this.state.pageType}
          wednesdayFontStyle = {this.state.fontStyle}
          handleClose = {this.handleClose}
        />
        <button id="scheduleButtonLarge" onClick={this.handleShow}>
          Schedule
        </button>
      </div>
    );
  }
}

export default RolePlayingLarge;
