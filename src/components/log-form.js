
import React from 'react';

import './styles/log-form.css';

import { Link } from 'react-router-dom';
import { newSymptom } from '../actions'
import { connect } from 'react-redux'


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
      experience: true,
      level: event.currentTarget.level.value,
      impact: event.currentTarget.impacts.value,
      impactNote: event.currentTarget['impact-notes'].value,
      symptomNote: event.currentTarget['symptom-notes'].value,
      successNote: event.currentTarget['success-notes'].value
    }
    let updatedSymptom = Object.assign({}, this.props.symptom, formData);
    this.props.dispatch(newSymptom(updatedSymptom))
    console.log(formData)
  }


  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <div>
            <div>
              <h1>{this.props.symptom.name}</h1>
            </div>
            <label htmlFor="experienced">check for yes, or click "save" for no</label>
            <input
              type="checkbox"
              id="experienced"
              name="experienced"
            >
            </input>
          </div>
          <div>
            <label htmlFor="level">Level 1-10</label>
            <input type="number" id="level" name="level"></input>
          </div>

          <div>
            <fieldset>
              <legend>Did anything happen that might have impacted this today?</legend>
              <input type="radio" name="impacts" id="impacts_yes" value="1"></input>
              <label htmlFor="impacts_yes">Yes</label>
              <input type="radio" name="impacts" id="impacts_no" value="0"></input>
              <label htmlFor="impacts_no">No</label>
            </fieldset>
          </div>
          <div>
            <label htmlFor="impact-notes">Let's try to write them down</label>
            <textarea id="impact-notes" name="impact-notes"></textarea>
          </div>
          <label htmlFor="symptom-notes">Here's a spot to put in any other thoughts, you can write as much or as little as you like </label>
          <textarea id="symptom-notes" name="symptom-notes"></textarea>
          <div>
            <label htmlFor="success-notes">What did you do well today? No matter how big or small, write it down!</label>
            <textarea id="success-notes" name="success-notes"></textarea>
          </div>

          <div>
            <Link to="/symptoms">
              <button className="btn" type="submit">Save</button>
            </Link>
            <Link to="/dashboard">
              <button className="btn" type="submit">Home</button>
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    symptom: state.wayfinder.selectedSymptom
  }
}

export default connect(mapStateToProps)(Logform);

{/* <div>
  <label htmlFor="level">If 1 is wellness and 10 is crisis- what level was your experience at today?</label>
  <input type="range"
    id="level"
    name="level"
    min="1"
    max="10"
    value="5"
    step="1"
    aria-valuemin="1"
    aria-valuemax="10"
    aria-valuenow="5"
    oninput="outputUpdate(value)">
  </input>
</div> */}
