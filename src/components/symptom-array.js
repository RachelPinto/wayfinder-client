import React from 'react';

import './styles/symptom-array.css';

export default function Symptomarray() {
  return (
      <div>
        <h1>Let's check in</h1>
        <p>lorem ipsum</p>
        <div>
          <button>Symptom 1</button>
          <label for="experienced">Experienced?</label>
          <input type="checkbox" id="experienced" name="experienced" value="1"></input>
        </div>
        <div>
          <button>Symptom 2</button>
          <label for="experienced">Experienced?</label>
          <input type="checkbox" id="experienced" name="experienced" value="1"></input>
        </div>
        <div>
          <button>Symptom 3</button>
          <label for="experienced">Experienced?</label>
          <input type="checkbox" id="experienced" name="experienced" value="1"></input>
        </div>
      </div>
  );
};