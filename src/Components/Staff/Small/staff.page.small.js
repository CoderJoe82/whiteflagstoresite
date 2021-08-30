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
                    <div id = "joeSpotSmall">
                        <img id = "joepicture" alt = "joe" src = {`${process.env.PUBLIC_URL}/images/FFstaffcardbacks/joefullpic.png`} />
                        <p id = "joeText">Joe@whiteflaggames.com</p>
                    </div>
                    <div id = "scottSpotSmall">
                        <img id = "scottpicture" alt = "scott" src = {`${process.env.PUBLIC_URL}/images/FFstaffcardbacks/scottfullpic.png`} />
                        <p id = "scottText">Scott@whiteflaggames.com</p>
                    </div>
                    <div id = "dakotaSpotSmall">
                        <img id = "dakotapicture" alt = "dakota" src = {`${process.env.PUBLIC_URL}/images/FFstaffcardbacks/dakotafullpic.png`} />
                        <p id = "dakotaText">Dakota@whiteflaggames.com</p>
                    </div>
                    <div id = "joshSpotSmall">
                        <img id = "joshpicture" alt = "josh" src = {`${process.env.PUBLIC_URL}/images/FFstaffcardbacks/joshfullpic.png`} />
                        <p id = "joshText">Josh@whiteflaggames.com</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default StaffPageSmall