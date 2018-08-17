import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
       return <Redirect to="/dashboard" />;
    }

    return (
        <section className="home">
        <div className="wrapper two-columns">
            <header className="header">
            <h1 className="header-title">Navigate mental wellness</h1>
            <p className="header-copy">We'll help you keep track of everything you need to get you where you want to be. Whether that's logging your daily symptoms, habits with negative impacts, or steps you're taking to achieve your goals, we're here to help.</p>
            <Link to="/newuser"><button className="btn">Get Started</button></Link>
            <div>
            <LoginForm />
            </div>
            </header>
        </div>
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);