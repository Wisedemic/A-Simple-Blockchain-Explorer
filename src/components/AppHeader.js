// Import React
import React, { Component } from 'react';

import { Navbar } from 'react-bulma-components';

// Export Component
export default class AppHeader extends Component {
	render() {
		return (
			<div className="container">
				<Navbar>
					<Navbar.Brand>
						<div className="navbar-item">
							<h1>React Blockchain Testgrounds</h1>
						</div>
						<Navbar.Burger />
					</Navbar.Brand>
					<Navbar.Menu>
						<div className="navbar-start"></div>
						<div className="navbar-end">
							{/*}<div className="navbar-item">
								<div className="tabs is-toggle is-fullwidth">
									<ul>
										<li className="is-active">
											<a>
												<span className="icon"><i className="fa fa-plus"></i></span>
												<span>Add Block</span>
											</a>
										</li>
										<li>
											<a>
												<span>Explore Blockchain</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
							*/}
						</div>
					</Navbar.Menu>
				</Navbar>
			</div>
		);
	}
}
