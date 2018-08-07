// Needed for redux-saga es6 generator support
import 'babel-polyfill';
/* Requires */
import React from 'react';
import { render } from 'react-dom';
// Global React + Redux State & History
import { configureStore } from './redux/store';
import createHistory from 'history/createBrowserHistory';
// Router Components
import { Route, Router, Switch} from 'react-router';
// Global State Binding for React
import { Provider } from 'react-redux';

// Application Main Root Component
import Root from './containers/App/';

import 'sanitize.css/sanitize.css';
// Load the favicon
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
/* eslint-enable import/no-webpack-loader-syntax */

// Import CSS reset and Global Styles
import 'styles/theme.scss';
import 'styles/Bulma.scss';


// Setup Redux Global State Storage + History
const history = createHistory();
const store = configureStore(history);

const ROOT_NODE = document.getElementById('app');

const renderToPage = Component => {
  render(
    <Provider store={store}>
      <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
          <Route component={Component}/>
        </Switch>
      </Router>
    </Provider>,
    ROOT_NODE
  );
};

renderToPage(Root);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept(['./containers/App/'], () => {
    ReactDOM.unmountComponentAtNode(ROOT_NODE);
    const HotApp = require('./containers/App/').default;
    renderToPage(HotApp);
  });
}
