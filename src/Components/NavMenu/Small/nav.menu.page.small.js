import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.menu.page.small.css";

class NavMenuSmall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            homeActive: false,
            gamesActive: false,
            staffActive: false,
            contactActive: false
        }
    }

  render() {
    return (
      <div id="navMenuSmall">
        <Link to="/whiteflagstoresite" className = "navLinks">
          <option>Home</option>
        </Link>
        <Link to="/whiteflagstoresite/gamespage" className = "navLinks">
          <option>Games</option>
        </Link>
        <Link to="/whiteflagstoresite/staffpage" className = "navLinks">
          <option>Staff</option>
        </Link>
        <Link to="/whiteflagstoresite/contactpage" className = "navLinks">
          <option>Contact</option>
        </Link>
      </div>
    );
  }
}

export default NavMenuSmall;
