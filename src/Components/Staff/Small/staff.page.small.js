import React, { Component } from 'react'
import NavMenuSmall from '../../NavMenu/Small/nav.menu.page.small'
import './staff.page.small.css'

class StaffPageSmall extends Component {
    render() {
        return (
            <div id = "staffPageSmall">
                <NavMenuSmall />
                <h3 id = "staffHeadText">Meet our Staff!</h3>
                <div id = "staffSectionSmall">
                    <div id = "joeSectionSmall">
                        <img alt = "owner mobile" id = "joeMobilePic" src = {`${process.env.PUBLIC_URL}/images/wfjoe.png`} />
                        <div id = "joeMobileText">
                            Name:<br />
                            Joe McNeil<br /><br />
                            Operations Director<br /><br />
                            joe@<br />whiteflaggames.com
                        </div>
                    </div>
                    <div id = "scottSectionSmall">
                        <img alt = "scott mobile" id = "scottMobilePic" src = {`${process.env.PUBLIC_URL}/images/wfscott.png`} />
                        <div id = "joeMobileText">
                            Name:<br />
                            Scott Andrews<br /><br />
                            Purchase and Account Director<br /><br />
                            Scott@<br />whiteflaggames.com
                        </div>
                    </div>
                    <div id = "dakotaSectionSmall">
                        <img alt = "dakota mobile" id = "dakotaMobilePic" src = {`${process.env.PUBLIC_URL}/images/wfdakota.png`} />
                        <div id = "dakotaMobileText">
                            Name:<br />
                            Dakota McMurray<br /><br />
                            Social Media Director<br /><br />
                            Dakota@<br />whiteflaggames.com
                        </div>
                    </div>
                    <div id = "joshSectionSmall">
                        <img alt = "josh mobile" id = "joshMobilePic" src = {`${process.env.PUBLIC_URL}/images/wfjosh.png`} />
                        <div id = "joshMobileText">
                            Name:<br />
                            Josh Freeman<br /><br />
                            Social Media Director<br /><br />
                            Dakota@<br />whiteflaggames.com
                        </div>
                    </div>
                    <div id = "aaronSectionSmall">
                        <img alt = "aaron mobile" id = "aaronMobilePic" src = {`${process.env.PUBLIC_URL}/images/wfaaron.png`} />
                        <div id = "aaronMobileText">
                            Name:<br />
                            Aaron Sutton<br /><br />
                            Social Media Director<br /><br />
                            Dakota@<br />whiteflaggames.com
                        </div>
                    </div>
                    <div id = "drewSectionSmall">
                        <img alt = "drew mobile" id = "drewMobilePic" src = {`${process.env.PUBLIC_URL}/images/wfdrew.png`} />
                        <div id = "drewMobileText">
                            Name:<br />
                            Drew Happli<br /><br />
                            Social Media Director<br /><br />
                            Dakota@<br />whiteflaggames.com
                        </div>
                    </div>
                </div>
                <div style = {{height: "10%", width: "100%", marginTop: "5%"}} />
            </div>
        )
    }
}

export default StaffPageSmall