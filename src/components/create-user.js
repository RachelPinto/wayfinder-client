import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import {connect} from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import {Link, Redirect} from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';

import createUserForm from './create-user-form';

import './styles/create-user.css';


export function CreateUserPage(props) {
    // // If we are logged in (which happens automatically when registration
    // // is successful) redirect to the user's dashboard
    // if (props.loggedIn) {
    //     return <Redirect to="/dashboard" />;
    // }
    return (
        <div>
            <h2>Create User</h2>
            <CreateUserPage />
            <Link to="/">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CreateUserPage);
