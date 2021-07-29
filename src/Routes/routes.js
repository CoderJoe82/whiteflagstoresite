import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from '../Components/LandingPage/landing.page'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path = "/" exact component = {LandingPage} />
                </Switch>
            </Router>
        )
    }
}

export default Routes