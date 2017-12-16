import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import Menu from './Menu'
import Header from './Header'
import MapStream from './MapStream'
import Home from './Home'

class App extends Component {
  state = {
    showMenu: false
  }

  toggleMenu = () => this.setState((state) => ({ showMenu: !state.showMenu }))

  hideMenu = () => {
    if(this.state.showMenu) this.toggleMenu()
  }

  render() {
    let { showMenu } = this.state
    return (
      <BrowserRouter>
        <div>
          { showMenu && <Menu closeMenu={this.toggleMenu} /> }
          <Header showMenu={this.toggleMenu} hideMenu={this.hideMenu} />
          <Route exact path="/" component={Home} />
          <Route exact path="/map" component={MapStream} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
