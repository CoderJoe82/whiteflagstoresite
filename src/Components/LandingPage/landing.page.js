import React, { Component } from 'react'
import { Breakpoint } from 'react-socks'
import LandingPageLarge from '../LandingPage/Large/LandingPageLarge'

class LandingPage extends Component {
    render() {
        return (
            <div id = "LandingPage">
                <Breakpoint large up>
                    <LandingPageLarge />
                </Breakpoint>
            </div>
        )
    }
}

export default LandingPage