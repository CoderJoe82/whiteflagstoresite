import React, {Component} from 'react'
import { Breakpoint } from 'react-socks'
import SkulDuggeryPageLarge from './Large/skul.duggery.page.large'
import './skul.duggery.page.css'

class SkulDuggeryPage extends Component {
    render() {
        return (
            <div id = "skulDuggeryPage">
                <Breakpoint large up>
                    <SkulDuggeryPageLarge />
                </Breakpoint>
            </div>
        )
    }
}

export default SkulDuggeryPage