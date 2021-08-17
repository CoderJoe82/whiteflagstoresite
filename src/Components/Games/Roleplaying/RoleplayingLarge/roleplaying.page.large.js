import React, { Component } from "react";
import GameMenu from "../../../GameMenu/game.menu";
import GamePagesHomeButton from "../../HomeButton/games.page.large.home.button";
import ScheduleButton from "../../ScheduleButton/schedule.button";
import "./roleplaying.page.large.css";

class RolePlayingLarge extends Component {
  render() {
    return (
      <div id="RoleplayingLarge">
        <GameMenu />
        <h1 id="roleplayTableText">Play games like these and more!</h1>
        <ScheduleButton />
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
      </div>
    );
  }
}

export default RolePlayingLarge;
