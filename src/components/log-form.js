
import React from 'react';

import './styles/log-form.css';

import { Link } from 'react-router-dom';
import { logForm } from '../actions'
import { connect } from 'react-redux'

//async actions for submit button. perform post request to endpoint.
//implement log in and sign up first - with token, save in local storage.
//use another async action in list to fetch all the records for that specfic user
//when you log in the user will generate a token, with that token you can query other endpoints (GET records and POST records)


export class Logform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(event) {
    event.preventDefault();
    let formData = {
      level: event.currentTarget.level.value,
      impact: event.currentTarget.impacts.value,
      impactNote: event.currentTarget['impact-notes'].value,
      symptomNote: event.currentTarget['symptom-notes'].value,
      successNote: event.currentTarget['success-notes'].value
    }
    this.props.dispatch(logForm(formData))
    console.log(formData)
  }


  render() {
      return (
        <div>
          <form onSubmit={(e) => this.onSubmit(e)}>
            <div>
              <label htmlFor="level">Level 1-10</label>
              <input type="number" id="level" name="level"></input>
            </div>
            <div>
              <fieldset>
                <legend>Did you have any life impacts today?</legend>
                <input type="radio" name="impacts" id="impacts_yes" value="1"></input>
                <label htmlFor="impacts_yes">Yes</label>
                <input type="radio" name="impacts" id="impacts_no" value="0"></input>
                <label htmlFor="impacts_no">No</label>
              </fieldset>
            </div>
            <div>
              <label htmlFor="impact-notes">Impact Notes</label>
              <textarea id="impact-notes" name="impact-notes"></textarea>
            </div>
            <label htmlFor="symptom-notes">Symptom Notes</label>
            <textarea id="symptom-notes" name="symptom-notes"></textarea>
            <div>
              <label htmlFor="success-notes">Success Notes</label>
              <textarea id="success-notes" name="success-notes"></textarea>
            </div>
            <div>
                <button type="submit">Submit log</button>
            </div>
            <div>
              <Link to="/">
                <button type="submit">Home</button>
              </Link>
            </div>
          </form>
        </div>
      )
    }
  }
  export default connect()(Logform);
