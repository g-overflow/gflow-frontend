import React, {
  Component
} from 'react';
import Navbar from './components/Navbar';
import ButtonGroup from './components/ButtonGroup';
import ProblemForm from './components/ProblemForm';
import NewComment from './components/AddComment'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  state = {}

  updateForm = (formInput) => {
    this.setState({
      problem: formInput
    })
  }

  updateComment = (commentInput) => {
    this.setState({
      comment: commentInput
    })
  }

  render() {
    return ( 
      <div className = "App">
        <Navbar />
        <ButtonGroup />
        <ProblemForm formState = {this.state}
        updateForm = {this.updateForm}/> 
        <NewComment commentState = {this.state}
        updateComment = {this.updateComment}/> 
        <Footer / >
      </div>
  );
}
}

export default App;