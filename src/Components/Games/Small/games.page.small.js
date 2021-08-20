import React, { Component } from "react";
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import NavMenuSmall from "../../NavMenu/Small/nav.menu.page.small";
import "./games.page.small.css";
import ScheduleModalSmall from "../ScheduleModal/Small/ScheduleModal.small";

class GamesPageSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      pageType: "",
    };
  }

  handleScheduleShow = () => {
    this.setState({
      pageType: "Games",
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div id="gamesPageSmall">
        <NavMenuSmall />
        <h1 id="offerTextMobile">What We Offer:</h1>
        <ul id="offerList">
          <li>Buying and selling of used games</li>
          <li>Reegularly scheduled events</li>
          <li>Large play area</li>
          <li>Plenty of parking</li>
          <li>Huge selection of board games</li>
          <li>Knowledgeable and friendly staff</li>
          <li>Family friendly</li>
          <li>Large selection of demo games</li>
        </ul>
        <div id="skulDuggery">
          <h1>Skulduggery!</h1>
          
          Game by Joseph McNeil and Solomon McNeil
          <br />
          Art by Keith Lowe
        </div>
        <div id="gamesSectionMobile">
          <Accordion>
            <AccordionSummary id="firstItemMobileGamesMenu">
              <Typography id="firstGamesMobileDetailsText">Tabletop</Typography>
            </AccordionSummary>
            <AccordionDetails id="firstAccordionBody">
              <h3 id="gameAccordionHeader">Play games like these!</h3>
              <br />
            </AccordionDetails>
            <AccordionDetails>
              <img
                id="legendaryMobile"
                alt="legendarymobilebox"
                src={`${process.env.PUBLIC_URL}/images/legendaryBoxImage.png`}
              />
            </AccordionDetails>
            <AccordionDetails>
              <img
                id="starwarsMobile"
                alt="star wars mobile box"
                src={`${process.env.PUBLIC_URL}/images/starWarsLegionBox.png`}
              />
            </AccordionDetails>
            <AccordionDetails>
              <img
                id="warhammerMobile"
                alt="war hammer mobile box"
                src={`${process.env.PUBLIC_URL}/images/warhammerboximage.png`}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary id="firstItemMobileGamesMenu">
              <Typography id="firstGamesMobileDetailsText">
                Card Games
              </Typography>
            </AccordionSummary>
            <AccordionDetails id="firstAccordionBody">
              <h3 id="gameAccordionHeader">Play games like these!</h3>
              <br />
            </AccordionDetails>
            <AccordionDetails>
              <img
                id="magicLogo"
                alt="magic logo"
                src={`${process.env.PUBLIC_URL}/images/magiclogo.png`}
              />
            </AccordionDetails>
            <AccordionDetails>
              <img
                id="pokemonLogo"
                alt="pokemon logo"
                src={`${process.env.PUBLIC_URL}/images/pokemonlogo.png`}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary id="firstItemMobileGamesMenu">
              <Typography id="firstGamesMobileDetailsText">
                Roleplaying
              </Typography>
            </AccordionSummary>
            <AccordionDetails id="firstAccordionBody">
              <h3 id="gameAccordionHeader">Play games like these!</h3>
              <br />
            </AccordionDetails>
            <AccordionDetails>
              <img
                id="danddlogo"
                alt="dungeon and dragons logo"
                src={`${process.env.PUBLIC_URL}/images/D&Dlogo.png`}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary id="firstItemMobileGamesMenu">
              <Typography id="firstGamesMobileDetailsText">Board</Typography>
            </AccordionSummary>
            <AccordionDetails id="firstAccordionBody">
              <h3 id="gameAccordionHeader">Play games like these!</h3>
              <br />
            </AccordionDetails>
            <AccordionDetails>
              <img
                id="catanLogo"
                alt="settlers of catan logo"
                src={`${process.env.PUBLIC_URL}/images/catanlogo.png`}
              />
            </AccordionDetails>
            <AccordionDetails>
              <img
                id="riskLogo"
                alt="risk game logo"
                src={`${process.env.PUBLIC_URL}/images/risklogo.png`}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary id="firstItemMobileGamesMenu">
              <Typography id="firstGamesMobileDetailsText">
                Roleplaying
              </Typography>
            </AccordionSummary>
            <AccordionDetails id="firstAccordionBody">
              <h3 id="gameAccordionHeader">Play games like these!</h3>
              <br />
            </AccordionDetails>
            <AccordionDetails>
              <img
                id="danddlogo"
                alt="dungeon and dragons logo"
                src={`${process.env.PUBLIC_URL}/images/D&Dlogo.png`}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary id="firstItemMobileGamesMenu">
              <Typography id="firstGamesMobileDetailsText">
                SkulDuggery!
              </Typography>
            </AccordionSummary>
            <AccordionDetails id="skulDuggeryImageSpot">
              <img
                id="skulduggeryLogo"
                alt="skulduggery logo"
                src={`${process.env.PUBLIC_URL}/images/SkulDuggery.png`}
              />
            </AccordionDetails>
            <AccordionDetails>
              <video controls id="skulDuggeryVideoMobile">
                <source
                  src="https://www.whiteflaggames.com/wp-content/uploads/2020/07/wfg-rules.mp4?_=1"
                  type="video/mp4"
                />
              </video>
            </AccordionDetails>
            <AccordionDetails id="GameResourceLinksMobile">
              <div>
                <a href="http://www.whiteflaggames.com/wp-content/uploads/2020/07/rules-page-1.pdf" target = "_blank" rel = "noreferrer">
                  Rules: Page 1
                </a>
              </div>
              <div>
                <a href="http://www.whiteflaggames.com/wp-content/uploads/2020/07/rules-page-2.pdf" target = "_blank" rel = "noreferrer">
                  Rules: Page 2
                </a>
              </div>
              <div>
                <a href="http://www.whiteflaggames.com/wp-content/uploads/2020/07/reference-card.pdf" target = "_blank" rel = "noreferrer">
                  Reference Card
                </a>
              </div>
            </AccordionDetails>
          </Accordion>

          <button id="scheduleButtonSmall" onClick={this.handleScheduleShow}>
            Games Schedule
          </button>
        </div>
        <ScheduleModalSmall
          show={this.state.show}
          pageType={this.state.pageType}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default GamesPageSmall;
