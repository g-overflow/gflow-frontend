import React from "react";
import Problem from "./Problem";
import AddComment from "./AddComment";
import Comments from "./Comments";
const url = "https://galvanize-queue-overflow.herokuapp.com/problems/";

export default class ProblemContainer extends React.Component {
  componentDidMount() {
    this.fetchProblem();
  }
  fetchProblem = () => {
    let id = window.location.href.split("/");
    fetch(`${url}${id[id.length - 1]}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };
  render() {
    return (
      <React.Fragment>
        <Problem />
        <AddComment />
        <Comments />
      </React.Fragment>
    );
  }
}
