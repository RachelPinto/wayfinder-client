import React from 'react';

import './styles/show-data.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { showData } from '../actions'
import moment from 'moment'

export class Showdata extends React.Component {

  componentDidMount() {
    this.props.dispatch(showData())
  }

  // onClick(event) {
  //   event.preventDefault();
  //   let dayData = {
  //     name: event.currentTarget.name.value,
  //     experience: this.refs.checking.checked,
  //     level: event.currentTarget.level.value,
  //     impact: event.currentTarget.impacts.value,
  //     impactNote: event.currentTarget['impact-notes'].value,
  //     symptomNote: event.currentTarget['symptom-notes'].value,
  //     successNote: event.currentTarget['success-notes'].value
  //   }
  //   this.props.dispatch(showData(dayData))
  //   console.log(dayData)
  // }

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
          {formatted.map((record, i) => {
              const records = record.symptoms.map((item, y) => {
                return (<p key={y*100}> 
                  {/* {item.successNote} {item.symptomNote} {item.level} {item.impact} {item.impactNote} */}
                  {item.name} {item.level} {item.impact ? 'true' : 'false'}
                  </p>)
              })
              return <div key={i}>{record.formatted} {records}</div>
          })}
          <Link to="/dashboard">
            <button className="btn" type="submit">Home</button>
          </Link>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {console.log(state) 
  return {
  symptoms: state.wayfinder.records
}};

export default connect(mapStateToProps)(Showdata);