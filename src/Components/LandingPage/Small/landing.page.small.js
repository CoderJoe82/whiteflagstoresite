import React, { Component } from 'react'
import NavMenuSmall from '../../NavMenu/Small/nav.menu.page.small'
import './landing.page.small.css'

class LandingPageSmall extends Component {
    render() {
        return (
            <div id = "landingPageSmall">
                <NavMenuSmall />
                <img id = "whiteflaglogomobile" alt = "store logo" src = {`${process.env.PUBLIC_URL}/images/whiteflaggameslogo.png`} />
                <h3 id = "landingpagemobiletitle">Our Mission Statement:</h3>
                <p id = "missionstatementmobile">
                When you shop here, you are doing more than supporting local business; you are making a statement that you believe in community. You understand that there is something incredible in sitting down with others to test your wits, your luck or your strategy. There is fun and adventure that exists in a place like this that cannot be found online. There is a place for you in the army of the White Flag.
                </p>
            </div>
        )
    }
}

export default LandingPageSmall