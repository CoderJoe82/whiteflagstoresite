import React, { Component } from 'react'
import { Breakpoint } from 'react-socks'
import './menu.css'
import GameMenuLarge from './GameMenuLarge/game.menu.large'

class GameMenu extends Component {
    render() {
        return (
            <div id = "MainMenu">
                <Breakpoint large up>
                    <GameMenuLarge />
                </Breakpoint>
            </div>
        )
    }
}

export default GameMenu