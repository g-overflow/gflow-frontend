import React from "react";

import ProblemForm from "./ProblemForm";

class NewQuestion extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      problem: ""
    };
  }

  handleUpdateTitle = (input) => {
    this.setState({ title: input });
  }

  handleUpdateText = (input) => {
    this.setState({ problem: input });
  }

  handleSubmit = () => {
   //post here
  }

  render() {
    const { title, body } = this.state;
    return (
            <ProblemForm
              title={title}
              body={body}
              onTitleChange={this.handleUpdateTitle}
              onUpdateText={this.handleUpdateBody}
              onSubmit={this.handleSubmitQuestion}
            />
    )}}