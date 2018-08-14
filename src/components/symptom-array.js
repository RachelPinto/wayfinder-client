import React from 'react';

import './styles/symptom-array.css';

import { Link } from 'react-router-dom';
import { experiencedForm } from '../actions'
import { connect } from 'react-redux'



export class Symptomarray extends React.Component {

  handleChecked(event) {
    //event.preventDefault();
    let data = {
      experience: this.refs.checking.checked
    }
    this.props.dispatch(experiencedForm(data))
    console.log(data)
  }

  render() {

    return (
      <div>
        <h1>Let's check in</h1>
        <p>lorem ipsum</p>
        <div>
          <Link to="/log-form">
          Symptoms: {this.props.symptoms.map(symptom => (<button>{symptom.name}</button>))}
          </Link>
          <div>
            <label htmlFor="experienced">Experienced?</label>
            <input
              type="checkbox"
              id="experienced"
              name="experienced"
              ref="checking"
              onChange={() => this.handleChecked()}>
            </input>
          </div>
        </div>

      </div>
    )
  }

}
const mapStateToProps = state => ({
  symptoms: state.wayfinder.symptoms
});
export default connect(mapStateToProps)(Symptomarray);

