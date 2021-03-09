import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "../views/Home";

const Routes = () => {
    return (
        <Switch>
            <Route component={Home} exact path="/" />
            <Redirect to="/" />
        </Switch>
    );
};

export default Routes;