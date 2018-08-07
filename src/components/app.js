import React from 'react';

import './styles/app.css';

import Logform from './log-form';
import Symptomarray from './symptom-array';
import Showdata from './show-data';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div>
                <header>
                </header>
                <main>
                    <Route exact path="/" component={ Symptomarray } />
                    <Route exact path="/log-form" component={ Logform } />
                    <Route exact path="/show-data" component={ Showdata } />
                </main>
            </div>
        </Router>
    );
}