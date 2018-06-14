

import React from 'react'
import {Form, Button, TextArea, Header} from 'semantic-ui-react'
const commentsUrl = "https://galvanize-queue-overflow.herokuapp.com/comments"

export default class CommentComposer extends React.Component {
  state = {
    comment: '',
    commentSuccess: false
  }
  handleCommentChange = (event) => {
   this.setState({
       [event.target.name]: event.target.value
   })
  }
  handleCommentSubmit = (event) => {
    event.preventDefault()
   const currentDate = new Date().toJSON()
   const body = {
        problem_id: 1,
        user_id: 4,
        date: currentDate,
        comment_text: this.state.comment,
        points: 1
    }
    fetch(commentsUrl, {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify(body),
    })
        .then(response => response.json())
        .then(response => {
            return response.error
                ? this.setState({ error: true })
                : this.setState({ error: false })
      }).then(response => {
        this.setState({commentSuccess: true})
        setTimeout(() => {
          this.setState({ commentSuccess: false })
        }, 5000);
        this.props.updateComment()
        this.setState({ comment: '' })
      })
  }

  render() {
    return (
      <Form className='comment-container'>
        <Form.Field>
          <TextArea
            name='comment'
            placeholder='Add a comment'
            style={{
              minHeight: 100
            }}
            value={this.state.comment}
            onChange={this.handleCommentChange} />
        </Form.Field>
        <Button color="black" type='submit' onClick={this.handleCommentSubmit}>Submit Comment</Button>
        <div>
          {this.state.commentSuccess ? <Header as="h3" color="green">Your comment was successfully submitted!</Header> : ''}
        </div>
      </Form>
    )
  }
}
