import React, { Component } from 'react'
import Breakpoint from 'react-socks'
import './cards.page.css'
import CardsPageLarge from './CardsLarge/cards.large.page'

class CardsPage extends Component {
    render() {
        return (
            <div id = "CardsPage">
                <Breakpoint large up>
                    <CardsPageLarge />
                </Breakpoint>
            </div>
        )
    }
}

export default CardsPage