import React from "react";
import Navbar from "./Navbar";
import Problem from "./Problem";
import AddComment from "./AddComment";
import Comment from "./Comment";
const url = "https://galvanize-queue-overflow.herokuapp.com/problems/";

export default class ProblemContainer extends React.Component {
  state = {
    comments: []
  }
  componentDidMount() {
    this.fetchProblem()

  }
  fetchProblem = () => {
    let id = window.location.href.split("/");
    fetch(`${url}${id[id.length - 1]}`)
      .then(res => res.json())
      .then(problemData => {
        this.setState({ problem: problemData })
      })
    this.fetchComments(id)
  }
  fetchComments = (id) => {
    fetch(`${url}comments/${id[id.length - 1]}`)
      .then(res => res.json())
      .then(commentData => {
        this.setState({ comments: commentData })
      })
  }
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        {this.state.problem ? <Problem problemData={this.state.problem} /> : ''}
        <AddComment />
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
