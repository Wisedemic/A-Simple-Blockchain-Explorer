import React, { Component } from 'react';
// import store from './store/';

import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';

export default class App extends Component {
	render() {
	   return (
	      <section className="hero is-fullheight is-dark">
				<header id="appHeader"  className="hero-head">
					<AppHeader />
				</header>
				<div id="appContent" className="hero-body">
	         	<AppMain />
				</div>
				<div id="appFooter" className="hero-foot">
					<AppFooter />
				</div>
	      </section>
	   );
	}
}
