import React, { useState } from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import Home from "../views/Home";
import Blog from "../views/Blog";
import Login from "../views/Login";
import { useUser } from "../context/user.context"

const Routes = () => {
    const { token, setToken } = useUser();

    if (!token) {
        return <Login setToken={setToken} />
    }
    return (
        <Switch>
            <Route component={Home} exact path="/personal-web/home" />
            <Route component={Blog} exact path="/personal-web/blog" />
            <Redirect to={{ pathname: "/personal-web/home" }} />
        </Switch>
    );
};

export default Routes;