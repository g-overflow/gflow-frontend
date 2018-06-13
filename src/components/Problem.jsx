import React from "react";
import { Container, Header, Label } from "semantic-ui-react";


class Problem extends React.Component {
  render() {
    return (
      <Container className="problem-container">
        <Header as="h2">
          {this.props.problemData ? this.props.problemData.problem_title : "broken"}
        </Header>
        <p>{this.props.problemData ? this.props.problemData.problem_text : "??"}</p>
        <Label.Group color="orange">
          {
            this.props.tags
              ?
                this.props.tags.map(tag => {
                  return <Label as="a">{tag.tag_name}</Label>
                })
              :
              ''
          }
        </Label.Group>
      </Container>
    );
  }
}

export default Problem;
