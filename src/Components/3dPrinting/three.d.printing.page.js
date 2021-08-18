import React, { Component } from 'react'
import { Breakpoint } from 'react-socks'
import ThreeDPrintingPageLarge from './Large/three.d.page.large'
import './three.d.printing.page.css'

class ThreeDPrintingPage extends Component {
    render() {
        return (
            <div id = "threeDPrintingPage">
                <Breakpoint large up>
                    <ThreeDPrintingPageLarge />
                </Breakpoint>
            </div>
        )
    }
}

export default ThreeDPrintingPage