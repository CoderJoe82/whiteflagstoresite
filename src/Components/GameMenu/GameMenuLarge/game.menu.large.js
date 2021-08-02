import './game.menu.large.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GameMenuLarge extends Component {
    render() {
        return (
            <div id = "GamesMenuLarge">
               <Link className = "GamesMenuLinks" to = "/whiteflagstoresite/gamespage/tabletop">
                <button className = "GamesMenuButtons">Tabletop</button>
               </Link>
               <Link className = "GamesMenuLinks" to = "/whiteflagstoresite/gamespage/cards">
                <button className = "GamesMenuButtons">Cards</button>
               </Link>
               <Link className = "GamesMenuLinks">
                <button className = "GamesMenuButtons">Roleplaying</button>
               </Link>
               <Link className = "GamesMenuLinks">
                <button className = "GamesMenuButtons">Board</button>
               </Link>
            </div>
        )
    }
}

export default GameMenuLarge