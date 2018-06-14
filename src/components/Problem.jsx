import React from "react";
import { Container, Header, Label } from "semantic-ui-react";


class Problem extends React.Component {
  render() {
    return (
      <Container className="col-10 problem-container">
        <Header as="h2">
          {this.props.problemData ? this.props.problemData.problem_title : "broken"}
        </Header>
        <hr />
        <p className="problem-text-container">{this.props.problemData ? this.props.problemData.problem_text : "??"}</p>
        <Label.Group color="orange" className="problem-tags">
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
