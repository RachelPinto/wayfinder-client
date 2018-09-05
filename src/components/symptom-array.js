import React from 'react';

import './styles/symptom-array.css';

import { Link } from 'react-router-dom';
import { newSymptom } from '../actions'
import { connect } from 'react-redux'
import { selectSymptom, logForm } from '../actions'


export class Symptomarray extends React.Component {

  handleChecked(event) {
    //event.preventDefault();
    let data = {
      experience: this.refs.checking.checked
    }
    this.props.dispatch(newSymptom(data))
    console.log(data)
  }

 selectSymptom(symptom) {
    this.props.dispatch(selectSymptom(symptom))
  }
  logForm() {
    this.props.dispatch(logForm(this.props.symptoms))
  }

  render() {

    return (
      <div>
        <h1>Let's check in</h1>
        <p>Click into your buttons to fill out your details for the day. Then, all you have to do is click the "I'm done" button, and you've logged for the day. Great job!  </p>
        <div>
          <Link to="/log-form">
          {this.props.symptoms.map(symptom => (<button className="btn" onClick={() => this.selectSymptom(symptom)}>{symptom.name}</button>))}
          </Link>
          {/* <div>
            <label htmlFor="experienced">Experienced?</label>
            <input
              type="checkbox"
              id="experienced"
              name="experienced"
              ref="checking"
              onChange={() => this.handleChecked()}
              >
            </input>
          </div> */}
        </div>
        <div>
          <button className="btn" onClick={() => this.logForm()}>I'm Done!</button>
        </div>
        <Link to="/show-data">
        <button className="btn">My data</button>
    </Link>
    <Link to="/dashboard">
        <button className="btn">My profile</button>
    </Link>
    </div>
    )
  }

}
const mapStateToProps = state => ({
  symptoms: state.wayfinder.symptoms
});
export default connect(mapStateToProps)(Symptomarray);

