import { Modal, Button } from "react-bootstrap";
import React, { Component } from "react";
import "./ScheduleModal.css";

class ScheduleModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} id="scheduleModal">
        <Modal.Header>
          <Modal.Title>{`${this.props.pageType} Schedule`}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="mainBody">
          <div id="gamesScheduleSpot">
            <div id="mondaySection" style = {{fontWeight: `${this.props.mondayFontStyle}`}}>
              <div id="mondayDay" class="scheduleModalBoxes dayStart">
                Monday
              </div>
              <div id="mondayHours" class="scheduleModalBoxes dayCenter">
                3pm - 9pm
              </div>
              <div id="mondayGames" class="scheduleModalBoxes dayEnd">
                Card Game Night
              </div>
            </div>
            <div id="tuesdaySection" style = {{fontWeight: `${this.props.tuesdayFontStyle}`}}>
              <div id="tuesdayDay" class="scheduleModalBoxes dayStart">
                Tuesday
              </div>
              <div id="tuesdayHours" class="scheduleModalBoxes dayCenter">
                3pm - 9pm
              </div>
              <div id="tuesdayGames" class="scheduleModalBoxes dayEnd">
                Pokemon Trading Card Game
              </div>
            </div>
            <div id="wednesdaySection" style = {{fontWeight: `${this.props.wednesdayFontStyle}`}}>
              <div id="wednesdayDay" class="scheduleModalBoxes dayStart">
                Wednesday
              </div>
              <div id="wednesdayHours" class="scheduleModalBoxes dayCenter">
                6pm - 9pm
              </div>
              <div id="wednesdayGames" class="scheduleModalBoxes dayEnd">
                Dungeons & Dragons
              </div>
            </div>
            <div id="thursdaySection" style = {{fontWeight: `${this.props.thursdayFontStyle}`}}>
              <div id="thursdayDay" class="scheduleModalBoxes dayStart">
                Thursday
              </div>
              <div id="thursdayHours" class="scheduleModalBoxes dayCenter">
                6pm - 9pm
              </div>
              <div id="thursdayGames" class="scheduleModalBoxes dayEnd">
                Miniature & Paint Night
              </div>
            </div>
            <div id="fridaySection" style = {{fontWeight: `${this.props.fridayFontStyle}`}}>
              <div id="fridayDay" class="scheduleModalBoxes dayStart">
                Friday
              </div>
              <div id="fridayHours" class="scheduleModalBoxes dayCenter">
                6pm - 10pm <br />7pm - 10pm
              </div>
              <div id="fridayGames" class="scheduleModalBoxes dayEnd">
                Universes/Final Fantasy <br />Magic: The Gathering
              </div>
            </div>
            <div id="saturdaySection" style = {{fontWeight: `${this.props.saturdayFontStyle}`}}>
              <div id="saturdayDay" class="scheduleModalBoxes dayStart">
                Saturday
              </div>
              <div id="saturdayHours" class="scheduleModalBoxes dayCenter">
                5p - 12pm
              </div>
              <div id="saturdayGames" class="scheduleModalBoxes dayEnd">
                Open Board Games
              </div>
            </div>
            <div id="sundaySection" style = {{fontWeight: `${this.props.sundayFontStyle}`}}>
              <div id="sundayDay" class="scheduleModalBoxes dayStart">
                Sunday
              </div>
              <div id="sundayHours" class="scheduleModalBoxes dayCenter">
                1pm - 6pm
              </div>
              <div id="sundayGames" class="scheduleModalBoxes dayEnd">
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
