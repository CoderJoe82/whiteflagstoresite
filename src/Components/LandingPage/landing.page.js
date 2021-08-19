import React, { Component } from 'react'
import { Breakpoint } from 'react-socks'
import LandingPageLarge from '../LandingPage/Large/LandingPageLarge'
import './landing.page.css'
import LandingPageSmall from './Small/landing.page.small'

class LandingPage extends Component {
    render() {
        return (
            <div id = "LandingPage">
                <Breakpoint large up>
                    <LandingPageLarge />
                </Breakpoint>
                <Breakpoint small down>
                    <LandingPageSmall />
                </Breakpoint>
            </div>
        )
    }
}

export default LandingPage