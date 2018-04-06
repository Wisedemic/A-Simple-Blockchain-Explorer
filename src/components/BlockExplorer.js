import React, { Component } from 'react';

import Block from './Block';

export default class BlockExplorer extends Component {
	render() {
		return (
			<div id="BlockExplorer">
				<nav className="panel">
					<p className="panel-heading">
						Block Explorer
					</p>
					{this.props.blocks.map((block) => {
						return <Block key={block.index} data={block} />
					})}
				</nav>
			</div>
		);
	}
}
