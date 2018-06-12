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

  updateForm = formInput => {
    this.setState({
      problem: formInput
    });
  };
  logOut = () => {
    window.Cookies.remove("galvanize-secrets-token");
    this.setState({ token: undefined, loggedIn: false });
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
