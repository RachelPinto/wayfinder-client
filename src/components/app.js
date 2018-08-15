import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { refreshAuthToken } from '../actions/auth';

import './styles/app.css';

import Logform from './log-form';
import Symptomarray from './symptom-array';
import Showdata from './show-data';
import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import CreateUserPage from './create-user';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <Router>
            <div>
                    <HeaderBar />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/symptoms" component={Symptomarray} />
                    <Route exact path="/log-form" component={Logform} />
                    <Route exact path="/show-data" component={Showdata} />
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/newuser" component={CreateUserPage} />
            </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);