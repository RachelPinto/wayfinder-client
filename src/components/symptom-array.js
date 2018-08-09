import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';

import './styles/symptom-array.css';

import { Link } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';
import { experiencedForm } from '../actions'
import { connect } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux'

export class Symptomarray extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  //   this.onClick = this.onClick.bind(this);
  // }

  handleChecked(event) {
    //event.preventDefault();
    let experienceFormData = {
      experience: this.refs.checking.checked
    }
    this.props.dispatch(experiencedForm(experienceFormData))
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
export default connect()(Symptomarray);

