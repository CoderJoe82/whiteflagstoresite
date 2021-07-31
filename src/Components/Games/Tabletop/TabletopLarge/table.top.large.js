import React, { Component } from 'react'
import GameMenu from '../../../GameMenu/game.menu'
import GamePagesHomeButton from '../../HomeButton/games.page.large.home.button'
import './table.top.large.css'


class TableTopLarge extends Component {
    render() {
        return (
            <div id = "TableTopLarge">
                <GameMenu />
                <GamePagesHomeButton />
            </div>
        )
    }
}

export default TableTopLarge