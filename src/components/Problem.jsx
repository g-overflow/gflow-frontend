import React from 'react';
import {Container, Header, Label} from 'semantic-ui-react'
class Problem extends React.Component {
  render() {
    return (
      <Container>
        <Header as='h2'>Title</Header>
        <p>Problem Text</p>
        <Label.Group color='orange'>
          <Label as='a'>Tag</Label>
        </Label.Group>
      </Container>
    )
  }
}

export default Problem;