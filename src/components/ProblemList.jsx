import React from "react";
import Problem from "./Problem";
import NavBar from "./Navbar"
import { Header } from 'semantic-ui-react';

const apiUrl = "https://galvanize-queue-overflow.herokuapp.com/";

class ProblemList extends React.Component {

  state = {
    problems: [],
    tags: []
  }

  componentDidMount() {
    fetch(apiUrl + 'problems')
      .then(response => response.json())
      .then(problems => {
        return this.setState({ problems: problems });
      }).then(() => {
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
          })
      })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header as="h2">Open Issues</Header>
        <div>
          {this.state.problems
            ?
            this.state.problems.map((problem, i) => {
              return <Problem key={i} problem={problem} />
            })
            : ''}
        </div>
      </React.Fragment >

    )
  }
}

export default ProblemList