import React, { Component } from 'react';

export default class Block extends Component {
	// constructor(props) {
	// 	// super(props);
	// 	// this.state = {
  //   //
	// 	// }
	// }

	render() {
		return (
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fa fa-book"></i>
        </span>
        <span className="panel-text">Block 0</span>
      </a>
		);
	}
}
