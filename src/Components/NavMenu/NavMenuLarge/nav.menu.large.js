import "./nav.menu.large.css";
import React from "react";
import { Link } from "react-router-dom";

const NavMenuLarge = () => {
  return (
      <div id="NavMenuLarge">
        <Link className = "NavButtonsLinks" to = "/whiteflagstoresite/gamespage">
          <button className="NavButtonsLarge">Games</button>
        </Link>
        <Link className = "NavButtonsLinks" to = "/whiteflagstoresite/skulduggery">
          <button className="NavButtonsLarge">SkulDuggery</button>
        </Link>
        <Link className = "NavButtonsLinks" to = "/whiteflagstoresite/staffpage">
          <button className="NavButtonsLarge">Staff</button>
        </Link>
        <Link className = "NavButtonsLinks" to = "/whiteflagstoresite/contactpage">
          <button className="NavButtonsLarge">Contact</button>
        </Link>
        <Link className = "NavButtonsLinks" to = "/whiteflagstoresite">
          <button className="NavButtonsLarge">Home</button>
        </Link>
      </div>
  )
}

export default NavMenuLarge;