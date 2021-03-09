import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "../views/Home";
import Scroll from "../views/Scroll";

const Routes = () => {
    return (
        <Switch>
            {/* <Redirect exact from="/" to="/login" /> */}
            <Route component={Home} exact path="/" />
            <Route component={Scroll} exact path="/Scroll" />
        </Switch>
    );
};

export default Routes;