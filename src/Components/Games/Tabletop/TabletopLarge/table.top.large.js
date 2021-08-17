import React, { Component } from "react";
import GameMenu from "../../../GameMenu/game.menu";
import GamePagesHomeButton from "../../HomeButton/games.page.large.home.button";
import { Modal, Button } from "react-bootstrap";
import "./table.top.large.css";

class TableTopLarge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
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

  handleClick = () => {
    alert("yo");
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
                />
              </div>
              <div id="warHammer">
                <img
                  id="warHammerBox"
                  src={`${process.env.PUBLIC_URL}/images/warhammerboximage.png`}
                />
              </div>
              <div id="legion">
                <img
                  id="legionBox"
                  src={`${process.env.PUBLIC_URL}/images/starWarsLegionBox.png`}
                />
              </div>
            </div>
            <div id="gameTable" />
            <div id="leftLeg" />
            <div id="rightLeg" />
          </div>

          <GamePagesHomeButton />
        </div>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          id="tabletopScheduleModal"
        >
          <Modal.Header>
            <Modal.Title>Tabletop Schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>Games!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <button id="scheduleButtonLarge" onClick={this.handleShow}>
          Schedule
        </button>
      </React.Fragment>
    );
  }
}

export default TableTopLarge;
