import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BoardPage from '../Components/Games/Board/board.page'
import CardsPage from '../Components/Games/Cards/cards.page'
import GamesPage from '../Components/Games/games.page'
import RolePlaying from '../Components/Games/Roleplaying/roleplaying.page'
import TableTopPage from '../Components/Games/Tabletop/table.top'
import LandingPage from '../Components/LandingPage/landing.page'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path = "/whiteflagstoresite" exact component = {LandingPage} />
                    <Route path = "/whiteflagstoresite/gamespage" exact component = {GamesPage} />
                    <Route path = "/whiteflagstoresite/gamespage/tabletop" exact component = {TableTopPage} />
                    <Route path = "/whiteflagstoresite/gamespage/cards" exact component = {CardsPage} />
                    <Route path = "/whiteflagstorestie/gamespage/roleplaying" exact component = {RolePlaying} />
                    <Route path = "/whiteflagstoresite/gamespage/boardpage" exact component = {BoardPage}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes