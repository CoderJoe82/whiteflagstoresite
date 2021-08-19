import React, { Component } from 'react'
import GamePagesHomeButton from '../../Games/HomeButton/games.page.large.home.button'
import './skul.duggery.page.large.css'

class SkulDuggeryPageLarge extends Component {
    render() {
        return (
            <div id = "skulDuggeryPageLarge">
                <img id = "skulDuggeryLogo" alt = "skulDuggery Title" src = {`${process.env.PUBLIC_URL}/images/SkulDuggery.png`} />
                <GamePagesHomeButton />
                <video controls id = "skulDuggeryVideo">
                    <source src = "https://www.whiteflaggames.com/wp-content/uploads/2020/07/wfg-rules.mp4?_=1" type = "video/mp4" />    
                </video>
                <div id = "GameResourceLinks">
                    <div><a href = "http://www.whiteflaggames.com/wp-content/uploads/2020/07/rules-page-1.pdf">Rules: Page 1</a></div>
                    <div><a href = "http://www.whiteflaggames.com/wp-content/uploads/2020/07/rules-page-2.pdf">Rules: Page 2</a></div>
                    <div><a href = "http://www.whiteflaggames.com/wp-content/uploads/2020/07/reference-card.pdf">Reference Card</a></div>
                </div>
            </div>
        )
    }
}

export default SkulDuggeryPageLarge