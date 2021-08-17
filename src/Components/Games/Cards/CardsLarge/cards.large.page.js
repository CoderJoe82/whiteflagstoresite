import React, { Component } from "react";
import GameMenuLarge from "../../../GameMenu/GameMenuLarge/game.menu.large";
import GamePagesHomeButton from "../../HomeButton/games.page.large.home.button";
import ScheduleButton from "../../ScheduleButton/schedule.button";
import "./cards.large.page.css";

class CardsPageLarge extends Component {
  render() {
    return (
      <div id="CardsPageLarge">
        <GameMenuLarge />
        <h1 id="CardGamesTitleLargeTitle">Come play cards with us!</h1>
        <ScheduleButton />
        <div id="MatHolder">
          <img
            alt="Card Game Mat"
            id="CardGameMat"
            src={`${process.env.PUBLIC_URL}/images/cardplaymat.png`}
          />
          <div id="CardGameMatCards">
            <div className = "TheMatCards" id="CardBack" />
            <div className = "TheMatCards" id = "MagicCard"><img id = "magicCardBack" src = {`${process.env.PUBLIC_URL}/images/Magic_card_back.png`} /></div>
            <div className = "TheMatCards" id = "PokemonCard" ><img id = "pokemonCardBack" src = {`${process.env.PUBLIC_URL}/images/pokemon_card_back.png`} /></div>
            <div className = "TheMatCards" id = "YugiohCard"><img id = "yugiohCardBack" src = {`${process.env.PUBLIC_URL}/images/yugioh_card_back.png`} /></div>
          </div>
        </div>
        <GamePagesHomeButton />
      </div>
    );
  }
}

export default CardsPageLarge;
