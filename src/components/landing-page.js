import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/symptoms" />;
    }

    return (
        <div className="home">
            <h2>Wayfinder</h2>
            <p>A mental wellness toolkit</p>
            <LoginForm />
            <Link to="/newuser">Create a new account</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);