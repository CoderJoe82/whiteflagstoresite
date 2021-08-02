import React, { Component } from "react";
import GameMenuLarge from "../../../GameMenu/GameMenuLarge/game.menu.large";
import GamePagesHomeButton from "../../HomeButton/games.page.large.home.button";
import "./cards.large.page.css";

class CardsPageLarge extends Component {
  render() {
    return (
      <div id="CardsPageLarge">
        <GameMenuLarge />
            
        <GamePagesHomeButton />
      </div>
    );
  }
}

export default CardsPageLarge;
