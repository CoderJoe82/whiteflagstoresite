import React, { Component } from 'react'
import './schedule.button.large.css'

class ScheduleButtonLarge extends Component {

    handleClickText = () => {
        alert('yo')
    }

    render() {
        return (
            <button id = "scheduleButtonLarge" onClick = {this.handleClickText}>
                Schedule
            </button>
        )
    }
}

export default ScheduleButtonLarge