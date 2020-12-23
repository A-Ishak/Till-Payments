import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";



export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Add Customer" component={Add} />
                    <Route path="/View Customers " component={ViewCust} />
                    <Route path="/View Merchants" component={ViewMerch} />
                </Switch>
            </Router>
        )
    }
}