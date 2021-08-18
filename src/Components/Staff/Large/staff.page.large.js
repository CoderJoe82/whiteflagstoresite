import React, { Component } from "react";
import GamePagesHomeButton from "../../Games/HomeButton/games.page.large.home.button";
import "./staff.page.large.css";

class StaffPageLarge extends Component {
  render() {
    return (
      <div id="staffPageLarge">
        <GamePagesHomeButton />
        <h1 id="staffTitleText">Meet the Staff</h1>
        <div id="staffPictureArea">
          <div id="pictureAreaTop">
            <div className="staffPictures">
              <img
                alt="joe"
                id="joepic"
                src={`${process.env.PUBLIC_URL}/images/wfjoe.png`}
              />
              <div className="staffText">
                <div id="joeStaffText">
                  <span style={{ fontWeight: "bold" }}>Name:</span>
                  <br />
                  Joe McNeil <br /> <br /> Operations Director <br /> <br />
                  joe@whiteflaggames.com
                </div>
              </div>
            </div>
            <div className="staffPictures">
              <img
                alt="scott"
                id="scottpic"
                src={`${process.env.PUBLIC_URL}/images/wfscott.png`}
              />
              <div className="staffText">
                <div id="scottStaffText">
                  <span style={{ fontWeight: "bold" }}>Name:</span>
                  <br />
                  Scott Andrews <br /> <br /> Purchase and Account Director <br /><br /> Scott@<br />whiteflaggames.com
                </div>
              </div>
            </div>
            <div className="staffPictures">
              <img
                alt="dakota"
                id="dakotapic"
                src={`${process.env.PUBLIC_URL}/images/wfdakota.png`}
              />
              <div className="staffText">
                <div id="dakotaStaffText">
                  <span style={{ fontWeight: "bold" }}>Name:</span> <br />
                  Dakota McMurray <br /> <br /> Social Media Director <br /> <br />
                  Dakota@<br />whiteflaggames.com
                </div>
              </div>
            </div>
          </div>
          <div id="pictureAreaBottom">
            <div className="staffPictures">
              <img
                alt="josh"
                id="joshpic"
                src={`${process.env.PUBLIC_URL}/images/wfjosh.png`}
              />
              <div className="staffText">
                <div id="joshStaffText">
                  <span style={{ fontWeight: "bold" }}>Name:</span>
                  <br />
                  Josh Freeman <br />
                  <br />
                  MAGIC Consultant <br /> <br />magic@<br />whiteflaggames.com
                </div>
              </div>
            </div>
            <div className="staffPictures">
              <img
                alt="aaron"
                id="aaronpic"
                src={`${process.env.PUBLIC_URL}/images/wfaaron.png`}
              />
              <div className="staffText">
                <div id="aaronStaffText">
                  <span style={{ fontWeight: "bold" }}>Name:</span>
                  <br />
                  Aaron Sutton <br />
                  <br />
                  Website Administrator<br /><br />Aaron@<br />whiteflaggames.com
                </div>
              </div>
            </div>
            <div className="staffPictures">
              <img
                alt="drew"
                id="drewpic"
                src={`${process.env.PUBLIC_URL}/images/wfdrew.png`}
              />
              <div className="staffText">
                <div id="drewStaffText">
                  <span style={{ fontWeight: "bold" }}>Name:</span>
                  <br />
                  Drew Happli <br />
                  <br />
                  Wewbsite Administrator<br /><br />drew@<br />whiteflaggames.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StaffPageLarge;
