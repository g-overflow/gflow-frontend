import React, { Component } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";

class Navbar extends Component {
  state = { activeItem: "home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <Segment className="navbar" inverted>
        <Menu attached inverted pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="questions"
            active={activeItem === "questions"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="ask"
            active={activeItem === "ask"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="users"
            active={activeItem === "users"}
            onClick={this.handleItemClick}
          />
          <Menu.Item position="right">
            <Input className="icon" icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="Sign In with slack"
            active={activeItem === "users"}
            onClick={this.handleItemClick}
            position="right"
          />
        </Menu>
      </Segment>
    );
  }
}

export default Navbar;
