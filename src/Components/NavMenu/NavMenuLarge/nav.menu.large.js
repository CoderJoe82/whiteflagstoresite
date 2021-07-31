import "./nav.menu.large.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavMenuLarge extends Component {
  render() {
    return (
      <div id="NavMenuLarge">
        <Link className = "NavButtonsLinks" to = "/whiteflagstoresite/gamespage">
          <button className="NavButtonsLarge">About Us</button>
        </Link>
        <Link className = "NavButtonsLinks" to = "/whiteflagstoresite/gamespage">
          <button className="NavButtonsLarge">Games</button>
        </Link>
        <Link className = "NavButtonsLinks" to = "/whiteflagstoresite/gamespage">
          <button className="NavButtonsLarge">Staff</button>
        </Link>
        <Link className = "NavButtonsLinks" to = "/whiteflagstoresite/gamespage">
          <button className="NavButtonsLarge">Contact</button>
        </Link>
        <Link className = "NavButtonsLinks" to = "/whiteflagstoresite/gamespage">
          <button className="NavButtonsLarge">Home</button>
        </Link>
      </div>
    );
  }
}

export default NavMenuLarge;
