import React, { Component } from 'react';

export default class AddBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {message: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({message: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.message.length > 0 ) {
			alert('A Block was submitted: ' + this.state.message);
		} else {
			alert('You must enter a message!');
		}
	}

	render() {
		return (
			<div id="addBlock">
			   <form onSubmit={this.handleSubmit}>
					<div className="field is-grouped is-grouped-centered">
						<p className="control">
							<button className="button is-info">
								<span className="icon"><i className="fa fa-plus"></i></span>
								<span>Add Block</span>
							</button>
						</p>
						<p className="control is-expanded">
							<input type="text" className="input is-dark" value={this.state.message} onChange={this.handleChange} placeholder="Type a message you would like permenantly added to this Blockchain!" />
						</p>
					</div>
			   </form>
			</div>
		);
	}
}
