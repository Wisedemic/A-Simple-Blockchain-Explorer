import React, { Component } from 'react';

export default class AppFooter extends Component {
	render() {
		return (
			<div className="container">
				<div className="content has-text-centered">
					<p>Made by: <a href="https://tristannavarrete.com/">Tristan Navarrete</a></p>
					<a href="https://github.com/Wisedemic/test-react-app"><i className="fa fa-github" style={{fontSize: '24px'}}></i></a>
				</div>
			</div>
		);
	}
}
