import React, { Component } from "react";
import NavMenuSmall from "../../NavMenu/Small/nav.menu.page.small";
import "./contact.page.small.css";

class ContactPageSmall extends Component {
  render() {
    return (
      <div id="contactPageSmall">
        <NavMenuSmall />
        <h1 id="contactText">Contact us!</h1>
        <div id="contactSection">
          <div>
            <h3>Our Location:</h3>
            402 S Indiana St.
            <br />
            Mooresville, In 46158
          </div>
          <br />
          <div>
            <h3>Phone Number:</h3>
            317-483-3400
          </div>
          <br />
          <div>
            <h3>Hours of Operation:</h3>
            Monday - Thursday: 3pm - 9pm
            <br />
            Friday - Saturday: 12pm - 10pm
            <br />
            Sunday: 1pm - 6pm
          </div><br />
          <div>
            <h3>3d Printing!!!</h3>
            White flag is looking for a skilled 3D printing designer for comission work!<br />
            Please contact joe@whiteflag.com for more details if interested.
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPageSmall;
