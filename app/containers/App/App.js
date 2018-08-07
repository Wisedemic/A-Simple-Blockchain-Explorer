/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Four_Oh_Four from 'containers/NotFoundPage/Loadable';
import GlobalMessages from 'containers/GlobalMessages/'

import './style.scss';

const App = () => (
  <React.Fragment>
    <section className="hero is-fullheight is-dark">
  		<header id="appHeader" className="hero-head">
        <div className="container">
  				<div className="navbar">
  					<div className="navbar-brand">
  						<div className="navbar-item">
  							<h1>A Simple Blockchain Explorer</h1>
  						</div>
  					</div>
  					<div className="navbar-menu">
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
  					</div>
  				</div>
  			</div>
        <GlobalMessages />
  		</header>
      <div id="appContent" className="hero-body is-fullheight">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route component={Four_Oh_Four} />
        </Switch>
      </div>
  	</section>
    <footer id="appFooter" className="hero-foot">
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
    </footer>
  </React.Fragment>
);

export default App;
