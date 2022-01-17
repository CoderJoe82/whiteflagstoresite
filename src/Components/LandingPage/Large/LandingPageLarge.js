import "./LandingPageLarge.css";
import React from "react";
import { Link } from "react-router-dom";
import NavMenuLarge from "../../NavMenu/NavMenuLarge/nav.menu.large";

const LandingPageLarge = () => {
  return (
    <div id="LandingPageLarge">
      <NavMenuLarge />
      <div id="logoAndMission">
        <img
          alt="white flag games logo"
          id="wfLogoImage"
          src={`${process.env.PUBLIC_URL}/images/whiteflaggameslogo.png`}
        />
        <h1 id="missionTitle">Our Mission Statement:</h1>
        <p id="missionText">
          When you shop here, you are doing more than supporting local business;
          you are making a statement that you believe in community. You
          understand that there is something incredible in sitting down with
          others to test your wits, your luck or your strategy. There is fun and
          adventure that exists in a place like this that cannot be found
          online. There is a place for you in the army of the White Flag.
        </p>
      </div>
      <Link to = "whiteflagstoresite/3dprinting" class = 'homePageLinks'>
      <div id="threeDPrintingSpot" class = 'gradient-border'></div>
      </Link>
      <Link to="whiteflagstoresite/skulduggery" class = 'homePageLinks'>
        <div id="skulDuggerySpot" class="gradient-border">
          <img
            id="homeSkulDuggeryImage"
            src={`${process.env.PUBLIC_URL}/images/SkulDuggery.png`}
          />
          <p>
            Created by:
            <br />
            Joseph McNeil
            <br />
            and
            <br />
            Solomon McNeil
            <br />
            Art by Keith Lowe
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LandingPageLarge;
