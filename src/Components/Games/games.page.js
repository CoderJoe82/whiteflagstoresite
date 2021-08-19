import React, { Component } from 'react'
import { Breakpoint } from 'react-socks'
import './games.page.css'
import GamesPageLarge from './GamesLarge/games.page.large'
import GamesPageSmall from './Small/games.page.small'

class GamesPage extends Component {
    render() {
        return (
            <div id = "gamesPage">
            <Breakpoint large up>
                <GamesPageLarge />

            </Breakpoint>
            <Breakpoint small down>
                <GamesPageSmall />
            </Breakpoint>
            </div>
        )
    }
}

export default GamesPage