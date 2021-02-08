import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Works from './Works';
import Error from './Error';

function HomePage() {
    return <Home />
};

function AboutPage() {
    return <About />
};

function WorksPage() {
    return <Works />
};

function ErrorPage() {
    return <Error />
};

function Routes() {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/works" component={WorksPage} />
                <Route path="/404" component={ErrorPage} />
                <Redirect from="*" to="/404" />
            </Switch>
        </div>
    );
};

export default Routes;