import React, { Component } from 'react'
import './board.page.large.css'
import GameMenu from '../../../GameMenu/game.menu'
import GamesPageHomeButton from '../../../Games/HomeButton/games.page.large.home.button'
import ScheduleButton from '../../ScheduleButton/schedule.button'

class BoardPageLarge extends Component {
    render() {
        return (
            <div id = "BoardPageLarge">
                <GameMenu />
                <h1 id = "boardGamesTitle">Board Games</h1>
                <ScheduleButton />
                <div id = "GameBoard">
                    
                </div>
                <GamesPageHomeButton />
            </div>
        )
    }
}

export default BoardPageLarge