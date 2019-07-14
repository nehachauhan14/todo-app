import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './components/users';
import Inbox from './components/inbox/inbox';
import NotFound from './components/notFound';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Search from './components/search/search';

const routing = (
    <Router>
        <div>
            <div className="col-xs-12 App">
                <Navigation />
                <Search />
            </div>
            <div>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/users' component={Users} />
                    <Route path='/inbox' component={Inbox} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
