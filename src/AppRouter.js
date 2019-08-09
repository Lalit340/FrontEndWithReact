import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Loginpage/Login';
import Signup from './components/registerpage/Signup';
import Dashboard from './components/Dashboard/Dashboard';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/signup" component={Signup} />
                <Route path="/dashboard" component={Dashboard} />
 
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;