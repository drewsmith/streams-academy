import React, { Component } from 'react';

import Header from './components/Header'
import MapStream from './components/MapStream'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MapStream />
      </div>
    );
  }
}

export default App;
