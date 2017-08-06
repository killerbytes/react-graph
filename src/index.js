import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
