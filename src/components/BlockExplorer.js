import React, { Component } from 'react';

import Block from './Block';

export default class BlockExplorer extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		blocks: props.blocks
	// 	}
	// }

	render() {
		return (
			<div id="BlockExplorer">
				<nav className="panel">
					<p className="panel-heading">
						Block Explorer
					</p>
					<a className="panel-block">
			        <span className="panel-icon">
			          <i className="fa fa-square"></i>
			        </span>
			        <span className="panel-text">Blocks Message Goes Here</span>
			      </a>

					{/*<Block blocks={this.props.blocks} /> */}
				</nav>
			</div>
		);
	}
}
