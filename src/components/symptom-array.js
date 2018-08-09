import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';

import './styles/symptom-array.css';

import { Link } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';
import { experiencedForm } from '../actions'
import { connect } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux'

export class Symptomarray extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.onClick = this.onClick.bind(this);
  }


  onClick(event) {
    event.preventDefault();
    let experienceFormData = {
      experience: event.currentTarget.experience.value,
    }
    this.props.dispatch(logForm(experienceFormData))
    console.log(experienceFormData)
  }
  render() {
    return (
      <div>
        <h1>Let's check in</h1>
        <p>lorem ipsum</p>

        <div>
          <Link to="/log-form">
            <button>Symptom 1</button>
          </Link>
          <label htmlFor="experienced">Experienced?</label>
          <input type="checkbox" id="experienced" name="experienced" value="1"></input>
        </div>

        <div>
          <Link to="/log-form">
            <button>Symptom 2</button>
          </Link>
          <label htmlFor="experienced" onClick={(e) => this.onClick(e)}>Experienced?</label>
          <input type="checkbox" id="experienced" name="experienced" value="1"></input>
        </div>

      </div>
    )
  }
}
export default connect()(Symptomarray);