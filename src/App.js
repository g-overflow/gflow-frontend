import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ButtonGroup from './components/ButtonGroup';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ButtonGroup />
      </div>
    );
  }
}

export default App;
