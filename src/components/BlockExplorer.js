import React, { Component } from 'react';

import Block from './Block';

import axios from 'axios';

export default class BlockExplorer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blocks: []
		};
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
		return (
			<div id="BlockExplorer">
				<nav className="panel">
					<p className="panel-heading">
						Block Explorer
					</p>
					{this.state.blocks.map((block) => {
						return <Block key={block.index} data={block} />
					})}
				</nav>
			</div>
		);
	}
}
