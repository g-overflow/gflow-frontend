import React from 'react';

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