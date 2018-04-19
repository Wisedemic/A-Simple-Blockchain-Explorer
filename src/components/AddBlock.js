import React, { Component } from 'react';

import axios from 'axios';

export default class AddBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {message: ''};
		this.handleChange = this.handleChange.bind(this);
		this.submitBlock = this.submitBlock.bind(this);
	}

	handleChange(event) {
		this.setState({message: event.target.value});
	}

	submitBlock(event) {
		event.preventDefault();
		if (this.state.message.length > 0 ) {
			axios.put('http://localhost:3001/api/blockchain/add', {
				message: this.state.message
			})
			.then(res => {
				//update the view
				this.setState({message: ''})
				return this.props.updateBlocks(res.data);
			}).catch(err => {
				console.log(err);
			});
			// alert('A Block was submitted: ' + this.state.message);
		} else {
			alert('You must enter a message!');
		}
	}

	render() {
		return (
			<div id="addBlock">
			   <form onSubmit={this.submitBlock}>
					<div className="field is-grouped is-grouped-centered">
						<p className="control">
							<button className="button is-info">
								<span className="icon"><i className="fa fa-plus"></i></span>
								<span>Add Block</span>
							</button>
						</p>
						<p className="control is-expanded">
							<input
								type="text"
								className="input is-dark"
								value={this.state.message}
								onChange={this.handleChange}
								onKeyPress={(e) => {
									if (e.key === 'Enter') this.submitBlock
								}}
								placeholder="Type a message you would like permenantly added to this Blockchain!"
							/>
						</p>
					</div>
			   </form>
			</div>
		);
	}
}
