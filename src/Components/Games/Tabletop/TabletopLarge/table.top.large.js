import React, { Component } from "react";
import GameMenu from "../../../GameMenu/game.menu";
import GamePagesHomeButton from "../../HomeButton/games.page.large.home.button";
import ScheduleButton from "../../ScheduleButton/schedule.button";
import "./table.top.large.css";

class TableTopLarge extends Component {
  render() {
    return (
      <div id="TableTopLarge">
        <GameMenu />
        <h1 id="tableTopText">Play games like these and more!</h1>
        <ScheduleButton />
        <div id="Table">
          <div id="leftChair">
            <div id="mainSeatLeft" />
            <div id = "mainBarLeft" />
            <div id = "mainBarLeftTwo" />
            <div id = "chairBackLeft" />
            <div id = "chairBackLeftSupport" />
          </div>
          <div id = "rightChair">
              <div id = "mainSeatRight" />
              <div id = "mainBarRight" />
              <div id = "mainBarRightTwo" />
              <div id = "chairBackRight" />
              <div id = "chairBackRightSupport" />
          </div>
          <div id = "gameTable" />
          <div id = "leftLeg" />
          <div id = "rightLeg" />
        </div>
        <GamePagesHomeButton />
      </div>
    );
  }
}

export default TableTopLarge;
