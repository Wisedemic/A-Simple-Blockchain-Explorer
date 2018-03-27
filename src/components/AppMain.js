// Import React
import React, { Component } from 'react';

import AddBlock from './AddBlock';
import BlockExplorer from './BlockExplorer';

// Export Component
export default class AppMain extends Component {
	render() {
		return(
			<div className="container">
				<h4 className="subtitle has-text-centered">Add something to the blockchain!</h4>
				<AddBlock />
				<BlockExplorer />
			</div>
		);
	}
}
