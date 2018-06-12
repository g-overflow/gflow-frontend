import React from "react";
import {Button} from "semantic-ui-react";

const ButtonGroup = () => (
  <Button.Group>
    <Button id="search-button" color="black">Search</Button>
    <Button id="ask-button" color="black">Ask</Button>
  </Button.Group>
);

export default ButtonGroup;
