import React from "react";
import Navbar from "./Navbar";
import Problem from "./Problem";
import AddComment from "./AddComment";
import Comment from "./Comment";
const url = "https://galvanize-queue-overflow.herokuapp.com/problems/";
const id = window.location.href.split("/");

export default class ProblemContainer extends React.Component {
  state = {
    comments: []
  }
  componentDidMount() {
    this.fetchProblem()

  }
  fetchProblem = () => {
    fetch(`${url}${id[id.length - 1]}`)
      .then(res => res.json())
      .then(problemData => {
        this.setState({ problem: problemData })
      })
    this.fetchComments(id)
  }
  fetchComments = () => {
    fetch(`${url}comments/${id[id.length - 1]}`)
      .then(res => res.json())
      .then(commentData => {
        console.log(commentData);
        this.setState({ comments: commentData })
      })
  }
  updateComment = () => {
    this.fetchComments();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        {this.state.problem ? <Problem problemData={this.state.problem} /> : ''}
        <AddComment updateComment={this.updateComment}/>
        {this.state.comments.length > 0
          ?
          <div>
            {this.state.comments.map((singleComment, i) => {
              return <Comment commentData={singleComment} key={singleComment.id}/>
            })}
          </div>
          :
          ''
        }
        <Comment />
      </React.Fragment>
    );
  }
}
