import React from 'react';

import './styles/symptom-array.css';
import { Link } from 'react-router-dom';

export default function Symptomarray() {
  return (
      <div>
        <h1>Let's check in</h1>
        <p>lorem ipsum</p>
        <div>
        <Link to="/log-form">
          <button>Symptom 1</button>
        </Link>
          <label for="experienced">Experienced?</label>
          <Link to="/show-data">
          <input type="checkbox" id="experienced" name="experienced" value="1"></input>
          </Link>
        </div>
        <div>
        <Link to="/log-form">
          <button>Symptom 2</button>
        </Link>
          <label for="experienced">Experienced?</label>
          <Link to="/show-data">
          <input type="checkbox" id="experienced" name="experienced" value="1"></input>
          </Link>
        </div>
        <div>
        <Link to="/log-form">
          <button>Symptom 3</button>
        </Link>
          <label for="experienced">Experienced?</label>
          <Link to="/show-data">
          <input type="checkbox" id="experienced" name="experienced" value="1"></input>
          </Link>
        </div>
        
      </div>
  );
};