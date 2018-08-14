import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import CreateUserForm from './create-user-form';

import './styles/create-user.css';


export function CreateUserPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/symptoms" />;
    }
    return (
        // <head>
        //     <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
        // </head>
        <div class="register-form-area">
            <h2 class="headings">Create User</h2>
            <CreateUserForm />
            <Link to="/login">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CreateUserPage);
