import React, { Component } from 'react'
import './board.page.large.css'
import GameMenu from '../../../GameMenu/game.menu'
import GamesPageHomeButton from '../../../Games/HomeButton/games.page.large.home.button'

class BoardPageLarge extends Component {
    render() {
        return (
            <div id = "BoardPageLarge">
                <GameMenu />
                <GamesPageHomeButton />
            </div>
        )
    }
}

export default BoardPageLarge