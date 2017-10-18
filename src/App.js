import React, { Component } from 'react';
import './style/style.css';

import Header from './Header';
import Search from './Search';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Search />
        <Gallery />
      </div>
    );
  }
}

export default App;
