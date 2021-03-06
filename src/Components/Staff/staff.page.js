import React, { Component } from "react";
import "./staff.page.css";
import { Breakpoint } from "react-socks";
import StaffPageLarge from "./Large/staff.page.large";
import StaffPageSmall from "./Small/staff.page.small";

class StaffPage extends Component {
  render() {
    return (
        <div id = "staffPage">
        <Breakpoint large up>
          <StaffPageLarge />
        </Breakpoint>
        <Breakpoint small down>
            <StaffPageSmall />
        </Breakpoint>
        </div>
    )
  }
}

export default StaffPage;
