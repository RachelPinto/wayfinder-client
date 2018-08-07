import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Logform from './components/log-form';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Logform />, 
  document.getElementById('root')
);
registerServiceWorker();
