import React, { Component } from 'react'
import { Breakpoint } from 'react-socks'
import LandingPageLarge from '../LandingPage/Large/LandingPageLarge'
import './landing.page.css'

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