import './nav.menu.css'
import React, { Component } from 'react'
import NavMenuLarge from './NavMenuLarge/nav.menu.large'

class NavMenu extends Component {
    render() {
        return (
            <div id = "NavMenu">
                <NavMenuLarge />
            </div>
        )
    }
}

export default NavMenu