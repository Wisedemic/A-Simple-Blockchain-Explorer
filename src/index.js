/* App Entry Point */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

// Grab our React App container
import App from './App';

// Render our DOM
ReactDOM.render(<App />, document.getElementById('root'));

// Start React
registerServiceWorker();
