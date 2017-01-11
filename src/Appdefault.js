import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Appdefault extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1 className="App-intro">
          Music is the breath of life!
        </h1>
      </div>
    );
  }
}

export default Appdefault;
