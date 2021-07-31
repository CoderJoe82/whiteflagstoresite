import React, { Component } from 'react'
import './games.page.css'
import GamesPageLarge from './GamesLarge/games.page.large'

class GamesPage extends Component {
    render() {
        return (
            <div id = "GamesPage">
                <GamesPageLarge />
            </div>
        )
    }
}

export default GamesPage