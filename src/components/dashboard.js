import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import { Link } from 'react-router-dom';
import './styles/dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-name">Hi {this.props.firstname}, </div>
                {/* <div className="dashboard-username">
                    Username: {this.props.username}
                </div> */}
                <div className="dashboard-protected-data"> You're logging
                    {this.props.symptoms.map(symptom => (<p>{symptom.name}</p>))}.
                </div>
                <p> Tracking your daily ups and downs is the best way to show your healthcare providers how to help you. We're here to make that simpler. All you have to do is click the button below to start making a daily log of your symptoms, habits, and goals. Click "show me my data" to see a complete history of all the information you've logged here. You can show it to your doctors, therapists, parents, dog - or just keep it for yourself. It's a daily personality quiz, all about you. No two people are the same, and you're navigating your own unique journey to wellness. 
            Wayfinder was created by a developer living with bipolar disorder, for use by her peers. This application in no way replaces clinical mental health care. If you are in a crisis please call 911 or go to your nearest emergency room. 
            </p>
                <div>
                    <Link to="/show-data">
                        <button className="btn">Take me to my data</button>
                    </Link>
                    <Link to="/symptoms">
                        <button className="btn">Ready to log</button>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    const { currentUser } = state.auth;
    return {
        username: currentUser ? currentUser.username : '',
        name: currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : '',
        symptoms: state.wayfinder.symptoms
    };
};

export default connect(mapStateToProps)(Dashboard);
