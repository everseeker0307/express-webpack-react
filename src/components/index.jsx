import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes/route.jsx';

ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('index'));
