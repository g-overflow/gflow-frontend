import React from "react";
import Navbar from "./Navbar";
import Problem from "./Problem";
import AddComment from "./AddComment";
import Comment from "./Comment";
const url = "https://galvanize-queue-overflow.herokuapp.com/";
const id = window.location.href.split("/");

export default class ProblemContainer extends React.Component {
  state = {
    comments: []
  };
  componentDidMount() {
    this.fetchProblem();
  }
  fetchProblem = () => {
    fetch(`${url}problems/${id[id.length - 1]}`)
      .then(res => res.json())
      .then(problemData => {
        this.setState({ problem: problemData });
      });
    this.fetchComments();
  };
  fetchComments = () => {
    console.log('hello');

    fetch(`${url}comments/`)
      .then(res => res.json())
      .then(commentData => {
        let filteredComments = commentData.filter(comment => {
          return comment.problem_id == id[id.length - 1];
        })
        this.setState({ comments: filteredComments });
        console.log(this.state.comments);

      });
  };
  updateComment = () => {
    this.fetchComments();
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {this.state.problem ? <Problem problemData={this.state.problem} /> : ""}
        <AddComment updateComment={this.updateComment} />
        {this.state.comments.length > 0 ? (
          <div>
            {this.state.comments.map((singleComment, i) => {
              return (
                <Comment commentData={singleComment} key={singleComment.id} />
              );
            })}
          </div>
        ) : (
          ""
        )}
        <Comment />
      </React.Fragment>
    );
  }
}
