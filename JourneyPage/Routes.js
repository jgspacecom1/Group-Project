import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import JourneyStartPage from './JourneyStartPage.js';
import EnterJourneyPage from './EnterJourneyPage.js';
import RecordJourneyPage from './RecordJourneyPage.js';

import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={JourneyStartPage} />
                    <Route path="/EnterJourneyPage" component={EnterJourneyPage} />
                    <Route path="/RecordJourneyPage" component={RecordJourneyPage} />
                </Switch>
            </Router>
        )
    }
}