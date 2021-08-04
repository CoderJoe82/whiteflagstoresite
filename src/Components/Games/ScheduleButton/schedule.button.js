import React, { Component } from "react";
import "./schedule.button.css";
import { Breakpoint } from "react-socks";
import ScheduleButtonLarge from "./Large/schedule.button.large";

class ScheduleButton extends Component {
  render() {
    return (
      <div id="ScheduleButton">
        <Breakpoint large up>
          <ScheduleButtonLarge />
        </Breakpoint>
      </div>
    );
  }
}

export default ScheduleButton;
