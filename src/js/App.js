import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import MainContent from './Maincontent'

class App extends Component {
  render() {
    return (
    <div>
        <Header />
      <MainContent />
    </div>
    );
  }
}

export default App;
