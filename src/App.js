import React, { Component } from 'react';

import Menu from './components/Menu'
import Header from './components/Header'
import MapStream from './components/MapStream'

class App extends Component {
  state = {
    showMenu: false
  }

  toggleMenu = () => this.setState((state) => ({ showMenu: !state.showMenu }))

  render() {
    let { showMenu } = this.state
    return (
      <div>
        { showMenu && <Menu closeMenu={this.toggleMenu} /> }
        <Header showMenu={this.toggleMenu} />
        <MapStream />
      </div>
    );
  }
}

export default App;
