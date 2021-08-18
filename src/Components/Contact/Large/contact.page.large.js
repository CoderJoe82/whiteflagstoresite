import React, { Component } from "react";
import { Link } from "react-router-dom";
import GamePagesHomeButton from "../../Games/HomeButton/games.page.large.home.button";
import "./contact.page.large.css";

class ContactPageLarge extends Component {
  render() {
    return (
      <div id="contactPageLarge">
        <GamePagesHomeButton />
        <h1 id="contactTitle">Contact us!</h1>
        <div id="contactContent">
          <div className="contactSections">
            <h3 className="contactSectionHeaders">Our Location:</h3>
            <br />
            402 S Indiana St.
            <br />
            Mooresville, IN 46158
          </div>
          <div className="contactSections">
            <h3 className="contactSectionHeaders">Phone Number:</h3>
            <br />
            317-483-3400
          </div>
          <div className="contactSections">
            <h3 className="contactSectionHeaders">Hours of Operation:</h3>
            <br />
            Monday - Thursday: 3pm - 9pm
            <br />
            Friday - Saturday: 12pm - 10pm
            <br />
            Sunday: 1pm - 6pm
          </div>
        </div>

        <div id="threeDPrinting">
          <h1>3d Printing!!!</h1>
          <p>
            Click <Link to = "/whiteflagstoresite/threeDPrintingPage">here</Link> to see some 3D printing the store has
            used!
          </p>
          <p>
            White flag is looking for a skilled 3D printing designer for
            comission work!
          </p>
          <p> Please contact joe@whiteflag.com for more details.</p>
        </div>
      </div>
    );
  }
}

export default ContactPageLarge;
