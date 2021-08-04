import React, { Component } from "react";
import "./roleplaying.page.css";
import { Breakpoint } from "react-socks";
import RolePlayingLarge from "./RoleplayingLarge/roleplaying.page.large";

class RolePlaying extends Component {
  render() {
    return (
      <div id="Roleplaying">
        <Breakpoint large up>
          <RolePlayingLarge />
        </Breakpoint>
      </div>
    );
  }
}

export default RolePlaying;
