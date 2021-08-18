import React, { Component } from "react";
import GameMenu from "../../GameMenu/game.menu";
import "./games.page.large.css";
import GamePagesHomeButton from "../HomeButton/games.page.large.home.button";
import { Link } from "react-router-dom";

class GamesPageLarge extends Component {
  render() {
    return (
      <div id="GamesPageLarge">
        <GameMenu />
        <div id="MainGamesPageLargeContent">
          <h1 id="GamesPageOfferText">What we Offer:</h1>
          <div id="offeringsAndSkulduggery">
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

            <div id="SkulduggerySide">
              <div id="skulduggerySideContent">
                <h1>Skulduggery!</h1>
                <p>
                  Click <Link to = "/whiteflagstoresite/skulduggery">here</Link> to find out more about Skulduggery!
                </p>
                <p>Game by Joseph McNeil and Solomon McNeil</p>
                <p>Art by Keith Lowe</p>
              </div>
            </div>
          </div>
        </div>
        <GamePagesHomeButton />
      </div>
    );
  }
}

export default GamesPageLarge;
