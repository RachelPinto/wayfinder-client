import React from 'react';

import './styles/show-data.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { showData } from '../actions'
import moment from 'moment'

export class Showdata extends React.Component {

  onClick(event) {
    event.preventDefault();
    let dayData = {
      name: event.currentTarget.name.value,
      experience: this.refs.checking.checked,
      level: event.currentTarget.level.value,
      impact: event.currentTarget.impacts.value,
      impactNote: event.currentTarget['impact-notes'].value,
      symptomNote: event.currentTarget['symptom-notes'].value,
      successNote: event.currentTarget['success-notes'].value
    }
    this.props.dispatch(showData(dayData))
    console.log(dayData)
  }

  render() {
    const formatted = this.props.symptoms.map(symptom => {
      symptom.formatted = moment(symptom.createdAt).format('M / D')
      return symptom
    });
    const data = {}
    formatted.forEach(symptom => {
      const date = symptom.formatted;
      if (data[date]) {
        data[date].push(symptom)
      } else {
        data[date] = [symptom]
      }
    })
    console.log(data);

    console.log(formatted, "====")
    return (
      <div>
        <div>
          <h1>My Data</h1>
          {formatted.map((symptom, i) => {
            return (<p key={i}>{symptom.formatted} {symptom.successNote} {symptom.symptomNote} {symptom.level} {symptom.impact} {symptom.impactNote}</p>)
          })}
          <Link to="/dashboard">
            <button type="submit">Home</button>
          </Link>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  symptoms: state.wayfinder.symptoms
});

export default connect(mapStateToProps)(Showdata);