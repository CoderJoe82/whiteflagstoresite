import React, { Component } from "react";
import GameMenu from "../../GameMenu/game.menu";
import "./games.page.large.css";
import GamePagesHomeButton from "./HomeButton/games.page.large.home.button";

class GamesPageLarge extends Component {
  render() {
    return (
      <div id="GamesPageLarge">
        <GameMenu />
        <h1 id="GamesPageOfferText">What we Offer:</h1>
        <div id="GamesPageLargeList">
          <ul>
            <li>Buying and selling of used games</li>
            <li>Regularly scheduled events</li>
            <li>Large play area</li>
            <li>Plenty of parking</li>
            <li>Huge selection of board games</li>
            <li>Knowledgeable and friendly staff</li>
            <li>Family friendly</li>
            <li>Large selection of demo games</li>
          </ul>
        </div>
        <div id="skullduggeryAndPrintingArea">
          <div id="SkulduggerySide">
            <h1>Skulduggery</h1>
            <p>
              Click {/*link*/}here{/*end link*/} to find out more about
              Skulduggery!
            </p>
            <p>Game by Joseph McNeil and Solomon McNeil</p>
            <p>Art by Keith Lowe</p>
          </div>
          <div id="PrintingSide">
            <h1>3d Printing!!!</h1>
            <p>
              White flag is looking for a skilled 3D printing designer for
              comission work!
            </p>
            <p> Please contact joe@whiteflag.com for more details.</p>
          </div>
        </div>
        <GamePagesHomeButton />
      </div>
    );
  }
}

export default GamesPageLarge;
