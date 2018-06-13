import React from 'react'
import {Form, Button, TextArea} from 'semantic-ui-react'
const commentsUrl = "https://galvanize-queue-overflow.herokuapp.com/comments"

export default class CommentComposer extends React.Component {
  state = {
   comment: ''
  }

  handleCommentChange = (event) => {
   this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCommentSubmit = (event) => {
   event.preventDefault()
   this.props.updateComment(this.state)
   const currentDate = new Date().toJSON()
   const body = {
        problem_id: 2,
        user_id: 4,
        date: currentDate,
        comment_text: this.state.comment,
        points: 1
    }

    return fetch(commentsUrl, {
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
           onChange={this.handleCommentChange}/>
          </Form.Field>
         <Button color="black" type='submit' onClick={this.handleCommentSubmit}>Submit Comment</Button>
        </Form>
    )
  }
}
