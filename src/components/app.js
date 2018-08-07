import React from 'react';

import './styles/app.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div>
                <header>
                </header>
                <main>
                    <Route exact path="/symptoms/:symptomId/form" component={Form} />
                </main>
            </div>
        </Router>
    );
}