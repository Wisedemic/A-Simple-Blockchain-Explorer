/* App Entry Point */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './stylesheets/Bulma.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root')
)

// Start React
registerServiceWorker();
