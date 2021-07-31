import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GamesPage from '../Components/Games/games.page'
import LandingPage from '../Components/LandingPage/landing.page'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path = "/whiteflagstoresite" exact component = {LandingPage} />
                    <Route path = "/whiteflagstoresite/gamespage" exact component = {GamesPage} />
                </Switch>
            </Router>
        )
    }
}

export default Routes