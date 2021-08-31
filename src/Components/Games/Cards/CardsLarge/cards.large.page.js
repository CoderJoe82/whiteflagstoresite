import React, { Component } from "react";
import GameMenuLarge from "../../../GameMenu/GameMenuLarge/game.menu.large";
import GamePagesHomeButton from "../../HomeButton/games.page.large.home.button";
import ScheduleModal from "../../ScheduleModal/ScheduleModal";
import "./cards.large.page.css";

class CardsPageLarge extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      pageType: "Card game",
      fontStyle: "bold"
    }
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div id="CardsPageLarge">
        <GameMenuLarge />
        <img id = "cardHeader" alt = "header" src = {`${process.env.PUBLIC_URL}/images/CardGameHeader.png`} />
        <div id="MatHolder">
          <img id = "playmat" alt = "mat" src = {`${process.env.PUBLIC_URL}/images/playmat.png`}/> 
          <div id="CardGameMatCards">
            <div className = "TheMatCards" id="CardBack" />
            <div className = "TheMatCards" id = "MagicCard"><img id = "finalfantasyCardBack" src = {`${process.env.PUBLIC_URL}/images/ffcardback.png`} alt = "final back"/></div>
            <div className = "TheMatCards" id = "PokemonCard" ><img id = "pokemonCardBack" src = {`${process.env.PUBLIC_URL}/images/pokemon_card_back.png`} alt = "pokemon back"/></div>
            <div className = "TheMatCards" id = "YugiohCard"><img id = "yugiohCardBack" src = {`${process.env.PUBLIC_URL}/images/yugioh_card_back.png`} alt = "yugioh back"/></div>
          </div>
        </div>
        <GamePagesHomeButton />
        <ScheduleModal
          show = {this.state.show}
          pageType = {this.state.pageType}
          mondayFontStyle = {this.state.fontStyle}
          tuesdayFontStyle = {this.state.fontStyle}
          fridayFontStyle = {this.state.fontStyle}
          sundayFontStyle = {this.state.fontStyle}
          handleClose = {this.handleClose}
        />
        <button id="scheduleButtonLarge" onClick={this.handleShow}>
          Schedule
        </button>
      </div>
    );
  }
}

export default CardsPageLarge;
