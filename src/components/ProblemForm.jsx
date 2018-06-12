import React, {Component} from "react"
import {Button, Input, TextArea, Form} from "semantic-ui-react"
const problemsUrl = 'https://galvanize-queue-overflow.herokuapp.com/problems'
class ProblemForm extends Component {
  state = {
    title: '',
    body: ''
  }
  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateForm(this.state)
    const randomUser = Math.floor(Math.random() * 5) + 1 
    const currentDate = new Date().toJSON()
    const body = {
        users_id: randomUser,
        date: currentDate,
        problem_title: this.state.title,
        problem_text: this.state.body,
        problem_solved: false
    }

    return fetch(problemsUrl, {
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
      <Form className='form-container'>
        <Form.Field>
          <label>Title</label>
          <Input
            name='title'
            placeholder='Title'
            id='title-bar'
            value={this.state.title}
            onChange={this.handleFormChange}/>
        </Form.Field>
        <Form.Field>
          <TextArea
            name="body"
            placeholder='Describe your programming problem in detail'
            style={{
            minHeight: 100
          }}
            value={this.state.body}
            onChange={this.handleFormChange}/>
        </Form.Field>
        <Form.Field>
          <label>Tags</label>
          <Input placeholder='Tags' id='tags-bar'/>
        </Form.Field>
        <Button color="black" type='submit' onClick={this.handleSubmit}>Submit Your Question</Button>
      </Form>
    )
  }
}

export default ProblemForm