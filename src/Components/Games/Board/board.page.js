import React, { Component } from 'react'
import './board.page.css'
import { Breakpoint } from 'react-socks'
import BoardPageLarge from './BoardLarge/board.page.large'

class BoardPage extends Component {
    render() {
        return (
            <div id = "BoardPage">
                <Breakpoint large up>
                    <BoardPageLarge />
                </Breakpoint>
            </div>
        )
    }
}

export default BoardPage