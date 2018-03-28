import React, { Component } from 'react';

export default class Block extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = props.data;
	}

	render() {
		return (
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fa fa-square"></i>
        </span>
        <span className="panel-text">{this.state.data.message}</span>
      </a>
		);
	}
}
