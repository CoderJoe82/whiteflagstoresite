import React, { Component } from 'react'
import './staff.page.css'
import { Breakpoint } from 'react-socks'
import StaffPageLarge from './Large/staff.page.large'

class StaffPage extends Component {
    render() {
        return (
            <Breakpoint large up>
                <StaffPageLarge />
            </Breakpoint>
        )
    }
}

export default StaffPage