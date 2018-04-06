// Import React
import React, { Component } from 'react';

import AddBlock from './AddBlock';
import BlockExplorer from './BlockExplorer';

import axios from 'axios';

// Export Component
export default class AppMain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blocks: []
		};
	}
	updateBlocks(blocks){
		this.setState({blocks});
	}
	componentDidMount() {
		axios.post('http://localhost:3001/api/blockchain/')
		.then(res => {
			if (res) {
				this.setState({blocks: res.data});
			} else {
				this.setState({blocks: []});
			}
		})
		.catch((err) => {
			console.log(err);
		});
	  }
	render() {
		return(
			<div className="container">
				<h4 className="subtitle has-text-centered">Add something to the blockchain!</h4>
				<AddBlock updateBlocks={this.updateBlocks.bind(this)}/>
				<BlockExplorer blocks={this.state.blocks}/>
			</div>
		);
	}
}
