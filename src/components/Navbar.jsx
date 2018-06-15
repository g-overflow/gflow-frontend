<<<<<<< HEAD
import React, { Component } from "react";
import { Segment, Menu, Input } from "semantic-ui-react";
import { NavLink, Redirect } from "react-router-dom";
=======
import React, {Component} from "react";
import {Segment, Menu, Input} from "semantic-ui-react";
import {NavLink, Redirect} from "react-router-dom";
>>>>>>> 6db3f2018dd01e27e55cf46fb2b258dfe173dada
import GLogo from "../assets/g-logo-small.png"
import GithubLogo from "../assets/github-logo.png"

class Navbar extends Component {
  state = {
    activeItem: "home",
    searchTerm: '',
    redirect: false
  };
  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
  }
  handleChange = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    this.setState({ [event.target.name]: [event.target.value] })
=======
    this.setState({
      [event.target.name]: [event.target.value]
    })
>>>>>>> 6db3f2018dd01e27e55cf46fb2b258dfe173dada
  }
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({redirect: true});
    }

  }
  render() {
    const { activeItem } = this.state;
    if (this.state.redirect) {
<<<<<<< HEAD
      return (<Redirect to={{
        pathname: '/queries/' + encodeURIComponent(this.state.searchTerm),
        state: { searchTerm: this.state.searchTerm }
      }} />)
=======
      return (<Redirect
        to={{
        pathname: '/queries/' + encodeURIComponent(this.state.searchTerm),
        state: {
          searchTerm: this.state.searchTerm
        }
      }}/>)
>>>>>>> 6db3f2018dd01e27e55cf46fb2b258dfe173dada
    }
    return (
      <Segment className="col-12 navbar" inverted id="navbar-container">
        <Menu attached inverted pointing secondary>
<<<<<<< HEAD
          <img src={GLogo} alt="Galvanize Logo" className="galv-logo" />
=======
          <img src={GLogo} alt="Galvanize Logo" className="galv-logo"/>
>>>>>>> 6db3f2018dd01e27e55cf46fb2b258dfe173dada
          <Menu.Item
            as={NavLink}
            to="/"
            name="home"
            className="nav-links"
            active={activeItem === "home"}
            onClick={this.handleItemClick} />
          <Menu.Item
            as={NavLink}
            to="/problems"
            name="questions"
            className="nav-links"
            active={activeItem === "questions"}
            onClick={this.handleItemClick} />
          <Menu.Item position="right">
<<<<<<< HEAD
            <Input onChange={this.handleChange} onKeyPress={this.handleKeyPress} name="searchTerm" className="icon" value={this.state.searchTerm} icon="search" placeholder="Search..." id="searchbar" />
=======
            <Input
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
              name="searchTerm"
              className="icon"
              value={this.state.searchTerm}
              icon="search"
              placeholder="Search..."
              id="searchbar"/>
>>>>>>> 6db3f2018dd01e27e55cf46fb2b258dfe173dada
          </Menu.Item>
          {/* <Menu.Item
            name="ask"
            active={activeItem === "ask"}
            onClick={this.handleItemClick}/>
          <Menu.Item
            name="users"
            active={activeItem === "users"}
            onClick={this.handleItemClick}/> */}
<<<<<<< HEAD
          {
            this.props.token ?
              (
                <Menu.Item
                  name="Log Out"
                  active={activeItem === "users"}
                  onClick={this.props.logOutUser}
                  position="right" />
              )
              :
              (
                <Menu.Item
                  href="https://github.com/login/oauth/authorize?client_id=e75e8c72d121f49f6a1b"
                  name="Sign In"
                  active={activeItem === "users"}
                  onClick={this.handleItemClick}
                  position="right" />
              )
          }
          <img src={GithubLogo} alt="github logo" />
=======
          {this.props.token
            ? (<Menu.Item
              name="Log Out"
              active={activeItem === "users"}
              onClick={this.props.logOutUser}
              position="right"/>)
            : (<Menu.Item
              href="https://github.com/login/oauth/authorize?client_id=e75e8c72d121f49f6a1b"
              name="Sign In"
              active={activeItem === "users"}
              onClick={this.handleItemClick}
              position="right"/>)
}
          <img src={GithubLogo} alt="github logo"/>
>>>>>>> 6db3f2018dd01e27e55cf46fb2b258dfe173dada
        </Menu>
      </Segment>
    )
  }
}

export default Navbar