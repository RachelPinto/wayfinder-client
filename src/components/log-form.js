
import React from 'react';

import './styles/log-form.css';
import { Field, reduxForm, focus } from 'redux-form';
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
    e.preventDefault();
    let formData = {
      experience: true,
      level: event.currentTarget.level.value,
      impact: event.currentTarget.impacts.value,
      impactNote: this.inputText.value,
      symptomNote: event.target.symptomnotes.value,
      successNote: event.target.successnotes.value
    }
    let updatedSymptom = Object.assign({}, this.props.symptom, formData);
    this.props.dispatch(newSymptom(updatedSymptom))
    console.log(formData)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values) )}>

          <div>
            <div>
              <h1>{this.props.symptom.name}</h1>
            </div>
            <label htmlFor="experienced">check for yes, or click "save" for no</label>
            <input type="checkbox" id="experienced" name="experienced">
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
            <textarea ref={input => this.inputText = input} id="impact-notes" name="impactnotes"></textarea>
          </div>
          <label htmlFor="symptom-notes">Here's a spot to put in any other thoughts, you can write as much or as little as you like </label>
          <textarea id="symptom-notes" name="symptomnotes"></textarea>
          <div>
            <label htmlFor="success-notes">What did you do well today? No matter how big or small, write it down!</label>
            <textarea id="success-notes" name="successnotes"></textarea>
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
export default reduxForm({ form: 'contact' })(logform);
