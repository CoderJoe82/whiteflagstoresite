
import { Modal, Button } from "react-bootstrap";
import React, { Component } from "react";
import "./ScheduleModal.small.css";

class ScheduleModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} id="scheduleModal">
        <Modal.Header>
          <Modal.Title>{`${this.props.pageType} Schedule`}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="mainBody">
          <div id="gamesScheduleSpot">
            <div id="mondaySection" >
              <div id="mondayDay" className ="scheduleModalBoxes dayStart">
                Monday
              </div>
              <div id="mondayHours" className ="scheduleModalBoxes dayCenter">
                3pm - 9pm
              </div>
              <div id="mondayGames" className ="scheduleModalBoxes dayEnd">
                Card Game Night
              </div>
            </div>
            <div id="tuesdaySection">
              <div id="tuesdayDay" className ="scheduleModalBoxes dayStart">
                Tuesday
              </div>
              <div id="tuesdayHours" className ="scheduleModalBoxes dayCenter">
                3pm - 9pm
              </div>
              <div id="tuesdayGames" className ="scheduleModalBoxes dayEnd">
                Pokemon Trading Card Game
              </div>
            </div>
            <div id="wednesdaySection">
              <div id="wednesdayDay" className ="scheduleModalBoxes dayStart">
                Wednesday
              </div>
              <div id="wednesdayHours" className ="scheduleModalBoxes dayCenter">
                6pm - 9pm
              </div>
              <div id="wednesdayGames" className ="scheduleModalBoxes dayEnd">
                Dungeons & Dragons
              </div>
            </div>
            <div id="thursdaySection">
              <div id="thursdayDay" className ="scheduleModalBoxes dayStart">
                Thursday
              </div>
              <div id="thursdayHours" className ="scheduleModalBoxes dayCenter">
                6pm - 9pm
              </div>
              <div id="thursdayGames" className ="scheduleModalBoxes dayEnd">
                Miniature & Paint Night
              </div>
            </div>
            <div id="fridaySection">
              <div id="fridayDay" className ="scheduleModalBoxes dayStart">
                Friday
              </div>
              <div id="fridayHours" className ="scheduleModalBoxes dayCenter">
                6pm - 10pm<br /> <br />7pm - 10pm
              </div>
              <div id="fridayGames" className ="scheduleModalBoxes dayEnd">
                Universes/Final Fantasy <br />Magic: The Gathering
              </div>
            </div>
            <div id="saturdaySection">
              <div id="saturdayDay" className ="scheduleModalBoxes dayStart">
                Saturday
              </div>
              <div id="saturdayHours" className ="scheduleModalBoxes dayCenter">
                5p - 12pm
              </div>
              <div id="saturdayGames" className ="scheduleModalBoxes dayEnd">
                Open Board Games
              </div>
            </div>
            <div id="sundaySection">
              <div id="sundayDay" className ="scheduleModalBoxes dayStart">
                Sunday
              </div>
              <div id="sundayHours" className ="scheduleModalBoxes dayCenter">
                1pm - 6pm
              </div>
              <div id="sundayGames" className ="scheduleModalBoxes dayEnd">
                Magic: The Gathering
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ScheduleModal;
