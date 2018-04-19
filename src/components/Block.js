import React, { Component } from 'react';

export default class Block extends Component {
	constructor(props) {
		super(props);
		this.state = props.data;
		this.state.isToggleOn = false;
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({isToggleOn: !this.state.isToggleOn});
	}

	render() {
		if (this.state.isToggleOn) {
			return (
				<div className="panel-block">
					<a className="panel-header" onClick={this.toggle}>
						<span className="panel-icon"><i className="fa fa-square"></i></span>
						<span className="panel-text">{this.state.data.message}</span>
					</a>
	        <div className="panel-body">
						<table className="table is-fullwidth">
							<tbody>
						    <tr>
						      <th>Block Height</th>
						      <td>{this.state.index}</td>
								</tr>
								<tr>
						      <th>Timestamp</th>
						      <td>{this.state.timestamp}</td>
								</tr>
								<tr>
						      <th>Previous Hash</th>
						      <td>{this.state.previousHash}</td>
								</tr>
								<tr>
						      <th>Hash</th>
						      <td>{this.state.hash}</td>
								</tr>
								<tr>
						      <th>Nonce</th>
						      <td>{this.state.nonce}</td>
								</tr>
						  </tbody>
						</table>
					</div>
	      </div>
			);
		} else {
			return (
				<a className="panel-block" onClick={this.toggle}>
					<div className="panel-header">
						<span className="panel-icon"><i className="fa fa-square"></i></span>
						<span className="panel-text">{this.state.data.message}</span>
					</div>
				</a>
			);
		}
	}
}
