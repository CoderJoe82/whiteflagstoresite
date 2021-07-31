import React, { Component } from 'react'
import GameMenu from '../../GameMenu/game.menu'
import './games.page.large.css'
import GamePagesHomeButton from './HomeButton/games.page.large.home.button'

class GamesPageLarge extends Component {
    render() {
        return (
            <div id = "GamesPageLarge">
                <GameMenu />
                <GamePagesHomeButton />
            </div>
        )
    }
}

export default GamesPageLarge