import React, { Component } from 'react'
import GameMenu from '../../../GameMenu/game.menu'
import GamePagesHomeButton from '../../HomeButton/games.page.large.home.button'
import './roleplaying.page.large.css'

class RolePlayingLarge extends Component {
    render() {
        return (
            <div id = "RoleplayingLarge">
                <GameMenu />
                    
                <GamePagesHomeButton />
            </div>
        )
    }
}

export default RolePlayingLarge