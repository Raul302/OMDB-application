import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import List from './containers/List';

import 'bootswatch/dist/lux/bootstrap.min.css';

const App = () => {
    return(
        <Fragment>
            <nav className="navbar navbar-dark bg-dark border-bottom border-white">
                <a href="/" className="navbar-brand">
                    OMDBApp
                </a>
            </nav>
        </Fragment>
        <main className="bg-dark">
            <div className="container">
                <List></List>
            </div>
        </main>
    )
}
ReactDOM.render(<App></App>
    ,document.getElementById('root'));