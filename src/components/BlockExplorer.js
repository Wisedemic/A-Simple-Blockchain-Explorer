import React, { Component } from 'react';

export default class BlockExplorer extends Component {
	render() {
		return (
			<nav className="panel">
				<p className="panel-heading">
					Block Explorer
				</p>
				<a className="panel-block">
					<span className="panel-icon">
						<i className="fa fa-book"></i>
					</span>
					<span className="panel-text">Block 0</span>
				</a>
			</nav>
		);
	}
}
