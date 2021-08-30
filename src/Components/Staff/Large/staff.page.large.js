import React, { Component } from "react";
import GamePagesHomeButton from "../../Games/HomeButton/games.page.large.home.button";
import "./staff.page.large.css";

class StaffPageLarge extends Component {
  render() {
    return (
      <div id="staffPageLarge">
        <GamePagesHomeButton />
        <h1 id="staffTitleText">Meet the Staff</h1>
        <div id="staffSection">
          <div id="joeSpot">
            <img id = "joePicture" alt = "joe" src = {`${process.env.PUBLIC_URL}/images/FFstaffcardbacks/joefullpic.png`}/>
            <p className = "pictureTexts">Joe@whiteflaggames.com</p>
          </div>
          <div id="scottSpot">
          <img id = "scottPicture" alt = "scott" src = {`${process.env.PUBLIC_URL}/images/FFstaffcardbacks/scottfullpic.png`}/>
            <p className = "pictureTexts">Scott@whiteflaggames.com</p>
          </div>
          <div id="dakotaSpot">
          <img id = "dakotaPicture" alt = "dakota" src = {`${process.env.PUBLIC_URL}/images/FFstaffcardbacks/dakotafullpic.png`}/>
            <p className = "pictureTexts">Dakota@whiteflaggames.com</p>
          </div>
          <div id="joshSpot">
          <img id = "joshPicture" alt = "josh" src = {`${process.env.PUBLIC_URL}/images/FFstaffcardbacks/joshfullpic.png`}/>
            <p className = "pictureTexts">Josh@whiteflaggames.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default StaffPageLarge;
