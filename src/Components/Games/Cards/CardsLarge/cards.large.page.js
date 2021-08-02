import React, { Component } from "react";
import GameMenuLarge from "../../../GameMenu/GameMenuLarge/game.menu.large";
import GamePagesHomeButton from "../../HomeButton/games.page.large.home.button";
import "./cards.large.page.css";

class CardsPageLarge extends Component {
  render() {
    return (
      <div id="CardsPageLarge">
        <GameMenuLarge />
        <h1 id="CardGamesTitleLargeTitle">Come play cards with us!</h1>
        <div id="MatHolder">
          <img
            alt="Card Game Mat"
            id="CardGameMat"
            src={`${process.env.PUBLIC_URL}/images/cardplaymat.png`}
          />
          <div id="CardGameMatCards">
            <div className = "TheMatCards" id="CardBack" />
            <div className = "TheMatCards" id = "MagicCard"/>
            <div className = "TheMatCards" id = "PokemonCard" />
            <div className = "TheMatCards" id = "YugiohCard"/>
          </div>
        </div>
        <GamePagesHomeButton />
      </div>
    );
  }
}

export default CardsPageLarge;
