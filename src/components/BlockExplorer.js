import React, { Component } from 'react';

import Block from './Block';

export default class BlockExplorer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blocks: props.blocks
		}
	}

	render() {
		return (
			<div id="BlockExplorer">
				<nav className="panel">
					<p className="panel-heading">
						Block Explorer
					</p>
					<Block blocks={this.props.blocks} />
				</nav>
			</div>
		);
	}
}
