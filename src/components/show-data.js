import React from 'react';

import './styles/show-data.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { showData } from '../actions'

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
    
    return (
    <div>
      <div>
        <h1>My Data</h1>
        <p>Your past 15 days</p>
        <Link to="/dashboard">
                <button type="submit">Home</button>
              </Link>
      </div>
      <div>
        <ul onClick={(e) => this.onClick(e)}></ul>
        <div>
              <label htmlFor="daydata"></label>
              <div type="object" id="daydata" name="daydata"></div>
            </div>
      </div>
    </div>
  )
}

}

export default connect(Showdata);