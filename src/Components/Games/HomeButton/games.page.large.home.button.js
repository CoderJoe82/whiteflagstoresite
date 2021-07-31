import React, { Component } from "react";
import './games.page.large.home.button.css'
import { Link } from 'react-router-dom'

class GamePagesHomeButton extends Component {
  render() {
    return (
      <Link id="GamesPageHomeLink" to="/whiteflagstoresite">
        <button id="GamesPageHomeButton">Home</button>
      </Link>
    );
  }
}

export default GamePagesHomeButton