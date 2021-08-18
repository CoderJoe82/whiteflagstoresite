import React, { Component } from "react";
import GameMenu from "../../../GameMenu/game.menu";
import GamePagesHomeButton from "../../HomeButton/games.page.large.home.button";
import "./table.top.large.css";
import ScheduleModal from "../../ScheduleModal/ScheduleModal";

class TableTopLarge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      pageType: "Tabletop",
      fontStyle: "bold",
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div id="TableTopLarge">
          <GameMenu />
          <h1 id="tableTopText">Play games like these and more!</h1>
          <div id="Table">
            <div id="leftChair">
              <div id="mainSeatLeft" />
              <div id="mainBarLeft" />
              <div id="mainBarLeftTwo" />
              <div id="chairBackLeft" />
              <div id="chairBackLeftSupport" />
            </div>
            <div id="rightChair">
              <div id="mainSeatRight" />
              <div id="mainBarRight" />
              <div id="mainBarRightTwo" />
              <div id="chairBackRight" />
              <div id="chairBackRightSupport" />
            </div>
            <div id="imageHolders">
              <div id="legendary">
                <img
                  id="legendaryBox"
                  src={`${process.env.PUBLIC_URL}/images/legendaryBoxImage.png`}
                  alt = ""
                />
              </div>
              <div id="warHammer">
                <img
                  id="warHammerBox"
                  src={`${process.env.PUBLIC_URL}/images/warhammerboximage.png`}
                  alt = ""
                />
              </div>
              <div id="legion">
                <img
                  id="legionBox"
                  src={`${process.env.PUBLIC_URL}/images/starWarsLegionBox.png`}
                  alt = ""
                />
              </div>
            </div>
            <div id="gameTable" />
            <div id="leftLeg" />
            <div id="rightLeg" />
          </div>
          <GamePagesHomeButton />
        </div>
        <ScheduleModal
          show={this.state.show}
          pageType={this.state.pageType}
          thursdayFontStyle = {this.state.fontStyle}
          handleClose = {this.handleClose}
        />
        <button id="scheduleButtonLarge" onClick={this.handleShow}>
          Schedule
        </button>
      </React.Fragment>
    );
  }
}

export default TableTopLarge;
