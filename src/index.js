import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app';
import Logform from './components/log-form';
import Showdata from './components/show-data';
import Symptomarray from './components/symptom-array';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<div>
<App />
<Logform />
<Showdata />
<Symptomarray />
</div>,
  document.getElementById('root')
);
registerServiceWorker();
