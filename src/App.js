import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ButtonGroup from './components/ButtonGroup';
import ProblemForm from './components/ProblemForm';
import './App.css';

class App extends Component {
  state = {
  }

  updateForm = (formInput) => {
    this.setState({
      problem: formInput
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <ButtonGroup />
        <ProblemForm formState={this.state} updateForm={this.updateForm}/>
      </div>
    );
  }
}

export default App;
