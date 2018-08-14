import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import { Link } from 'react-router-dom';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
                // Only render the log out button if we are logged in
                let logOutButton;
                if (this.props.loggedIn) {
                    logOutButton = (
                        <button onClick={() => this.logOut()}>Log out</button>
                    );
                }
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                
                <div className="dashboard-protected-data">
                    Symptoms: {this.props.symptoms.map(symptom => (<p>{symptom.name}</p>))}
                </div>
                <div>
                <Link to="/symptoms">
                    <button>Ready to log</button>
                    </Link>
                    <Link to="/show-data">
                    <button>Take me to my data</button>
                    </Link>
                    {logOutButton}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: currentUser ? currentUser.username : '',
        name: currentUser ? `${currentUser.firstName} ${currentUser.lastName}`: '',
        symptoms:  state.wayfinder.symptoms
    };
};

export default connect(mapStateToProps)(Dashboard);
