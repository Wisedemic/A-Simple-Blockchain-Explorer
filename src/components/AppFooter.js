import React, { Component } from 'react';

export default class AppFooter extends Component {
	render() {
		return (
			<div className="container has-text-centered">
				<h4 className="title is-4">Created By</h4>
				<nav className="level">
					<div className="level-item"></div>
						<div className="level-item has-text-centered">
							<p>Tristan Navarrete</p>
							<a href="https://tristannavarrete.com/">{'https://tristannavarrete.com/'}</a>
							<a href="https://github.com/Wisedemic/"><i className="fa fa-github"></i></a>
						</div>
						<div className="level-item has-text-centered">
							<p>Sujit Karki</p>
							<a href="http://swoozeki.me/">{'http://swoozeki.me/'}</a>
							<a href="https://github.com/Swoozeki"><i className="fa fa-github"></i></a>
						</div>
						<div className="level-item"></div>
				</nav>
			</div>
		);
	}
}
