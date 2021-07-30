import './nav.menu.large.css'
import React, { Component } from 'react'

class NavMenuLarge extends Component {
    render() {
        return (
            <div id = "NavMenuLarge">
                <button className = "NavButtonsLarge">About Us</button>
                <button className = "NavButtonsLarge">Games</button>
                <button className = "NavButtonsLarge">Staff</button>
                <button className = "NavButtonsLarge">Contact</button>
                <button className = "NavButtonsLarge">Home</button>
            </div>
        )
    }
}

export default NavMenuLarge