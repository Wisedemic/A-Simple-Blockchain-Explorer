import React from 'react';
// import store from './store/';

import Header from './components/Header';
import AppMain from './components/AppMain';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
        <div>
          <Header/>
          <AppMain />
          <Footer />
        </div>
    );
  }
}

export default App;
