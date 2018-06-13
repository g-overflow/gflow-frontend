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
    console.log("hello");
    fetch(`${url}comments/`)
      .then(res => res.json())
      .then(commentData => {
        let filteredComments = commentData.filter(comment => {
          return comment.problem_id == id[id.length - 1];
        });
        this.setState({ comments: filteredComments });
      })
      .then(this.fetchTags);
  };
  fetchTags = () => {
    fetch(`http://galvanize-queue-overflow.herokuapp.com/problem/tags`)
      .then(res => res.json())
      .then(tagProblems => {
        fetch(`http://galvanize-queue-overflow.herokuapp.com/tags`)
          .then(res => res.json())
          .then(tags => {
            let currentProblemsTags = tagProblems.reduce((acc, curr, i) => {
              if (curr["problem_id"] == this.state.problem["id"]) {
                let currTagInfo = {
                  tag_id: curr.tag_id,
                  problem_id: curr.problem_id,
                  tag_name: tags[curr.tag_id - 1]["tag_name"]
                };
                acc.push(currTagInfo);
              }
              return acc;
            }, []);
            this.setState({ tags: currentProblemsTags });
          });
      });
  };
  updateComment = () => {
    this.fetchComments();
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {this.state.problem ? <Problem tags={this.state.tags} problemData={this.state.problem} /> : ""}
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
