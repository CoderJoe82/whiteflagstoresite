import "./LandingPageLarge.css";
import React, { Component } from "react";
import NavMenu from "../../NavMenu/nav.menu";

class LandingPageLarge extends Component {
  render() {
    return (
      <div id="LandingPageLarge">
        <div id="LandingPageContent">
            <NavMenu />
          <img
            alt="storeLogo"
            id="storeLogo"
            src={`${process.env.PUBLIC_URL}/images/whiteflaggameslogo.png`}
          />
          <h1 id="storeTitle">White Flag Games</h1>
          <h3 id = "missionTitle">Our Mission Statement:</h3>
          <p id="MissionStatement">
            
            When you shop here, you are doing more than supporting local
            business; you are making a statement that you believe in community.
            You understand that there is something incredible in sitting down
            with others to test your wits, your luck or your strategy. There is
            fun and adventure that exists in a place like this that cannot be
            found online. There is a place for you in the army of the White
            Flag.
          </p>
        </div>
      </div>
    );
  }
}

export default LandingPageLarge;
