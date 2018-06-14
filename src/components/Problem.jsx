import React from "react";
import { Container, Header, Label } from "semantic-ui-react";
import {NavLink } from "react-router-dom";

class Problem extends React.Component {
  logData() {
    return this.props.tags[this.props.problemData.id].map(tag => {
      return <Label as="a">{tag}</Label>;
    });
  }
  render() {
    return (
      <Container className="col-10 problem-container">
        <Header as={NavLink} to={`/problems/${this.props.problemData.id}`} id='problem-title'>
          {this.props.problemData
            ? this.props.problemData.problem_title
            : "broken"}
        </Header>
        <hr />
        <p id='problem-text'>
          {this.props.problemData ? this.props.problemData.problem_text : "??"}
        </p>
        <Label.Group color="problem-tags orange">
          {this.props.tags && this.props.tags[this.props.problemData.id]
            ? this.logData()
            : ""}
        </Label.Group>
      </Container>
    );
  }
}

export default Problem;
