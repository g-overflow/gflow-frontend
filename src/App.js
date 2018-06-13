import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ButtonGroup from "./components/ButtonGroup";
import ProblemForm from "./components/ProblemForm";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: false
  };
  componentDidMount() {
    var access_token = window.Cookies.get("galvanize-secrets-token");
    if (access_token) {
      this.setState({ loggedIn: true });
      this.setState({ token: access_token });
    }
  }
  //   getUser = () => {
  //     fetch('https://api.github.com/user', {
  //       headers: { Authorization: 'Bearer ' + access_token }
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);

  //   })
  // }
  updateForm = formInput => {
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

});
  };
  logOut = (e) => {
    window.Cookies.remove("galvanize-secrets-token");
    e.preventDefault()
    this.setState({ token: undefined, loggedIn: false });
    console.log(
      "token",
      this.state.token,
      "loggedIn",
      this.state.loggedIn
    );
  };
  render() {
    console.log(document.cookie);
    return (
      <div className="App">
        <Navbar
          token={this.state.token}
          loggedIn={this.state.loggedIn}
          logOutUser={this.logOut}
        />
        <ButtonGroup />
        <ProblemForm formState={this.state} updateForm={this.updateForm} />
      </div>
  );
}
}

export default App;