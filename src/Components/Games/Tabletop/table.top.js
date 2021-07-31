import React, { Component } from 'react'
import { Breakpoint } from 'react-socks'
import TableTopLarge from './TabletopLarge/table.top.large'

class TableTopPage extends Component {
    render() {
        return (
            <div id = "TableTop">
                <Breakpoint large up>
                    <TableTopLarge />
                </Breakpoint>
            </div>
        )
    }
}

export default TableTopPage