import React, { Component } from 'react'
import { Breakpoint } from 'react-socks'
import './contact.page.css'
import ContactPageLarge from './Large/contact.page.large'
import ContactPageSmall from './Small/contact.page.small'

class ContactPage extends Component {
    render() {
        return(
            <div id = "contactPage">
                <Breakpoint large up>
                    <ContactPageLarge />
                </Breakpoint>
                <Breakpoint small down>
                    <ContactPageSmall />
                </Breakpoint>
            </div>
        )
    }
}

export default ContactPage