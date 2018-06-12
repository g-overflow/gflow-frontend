import React, {Component} from "react";
import {Input, Menu, Segment} from "semantic-ui-react";
import GLogo from "../assets/g-logo-small.png"
import GithubLogo from "../assets/github-logo.png"

class Navbar extends Component {
  state = {
    activeItem: "home"
  };
  handleItemClick = (e, {name}) => this.setState({activeItem: name});
  render() {
    const {activeItem} = this.state;

    return (
      <Segment className="navbar" inverted id="navbar-container">
        <Menu attached inverted pointing secondary >
        <img src={GLogo} alt="Galvanize Logo"/>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}/>
          <Menu.Item
            name="questions"
            active={activeItem === "questions"}
            onClick={this.handleItemClick}/>
          <Menu.Item
            name="ask"
            active={activeItem === "ask"}
            onClick={this.handleItemClick}/>
          <Menu.Item
            name="users"
            active={activeItem === "users"}
            onClick={this.handleItemClick}/>
          <Menu.Item position="right">
            <Input className="icon" icon="search" placeholder="Search..." id="searchbar"/>
          </Menu.Item>
          <Menu.Item
            name="Sign In"
            active={activeItem === "users"}
            onClick={this.handleItemClick}
            position="right"/>
          <img src={GithubLogo} alt="github logo"/>
        </Menu>
      </Segment>
    )
  }
}

export default Navbar