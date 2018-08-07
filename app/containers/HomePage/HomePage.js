/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlockExplorer from '../BlockExplorer/';

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <h4 className="subtitle has-text-centered">Add Something To This Blockchain!</h4>
        <h5 className="subtitle has-text-centered">Anything added here will be permenant! This app shows how simple a blockchain can be.</h5>
        <BlockExplorer />
      </div>
    );
  }
}

// HomePage.propTypes = {
// };
