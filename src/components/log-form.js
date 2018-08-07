
import React from 'react';

import './styles/log-form.css';

export default function Logform() {
  return (
    <div> 
      <form>
        <div>
          <label for="level">Level 1-10</label>
          <input type="number" id="level" name=""></input>
        </div>
        <div>
          <fieldset>
            <legend>Did you have any life impacts today?</legend>
              <input type="radio" name="impacts" id="impacts_yes" value="1"></input>
              <label for="impacts_yes">Yes</label>
              <input type="radio" name="impacts" id="impacts_no" value="0"></input>
              <label for="impacts_no">No</label>
          </fieldset>
        </div>
        <div>
          <label for="impact-notes">Impact Notes</label>
          <textarea id="impact-notes" name="impact-notes"></textarea>
        </div>
          <label for="symptom-notes">Symptom Notes</label>
          <textarea id="symptom-notes" name="symptom-notes"></textarea>
        <div>
          <label for="success-notes">Success Notes</label>
          <textarea id="success-notes" name="success-notes"></textarea>
        </div>
        <div>
          <button type="submit">Submit log</button>
        </div>
      </form>
    </div>
  );
}
