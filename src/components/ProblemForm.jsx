import React, {Component} from "react"
import {Button, Input, TextArea, Form} from "semantic-ui-react"

class ProblemForm extends Component {
  state = {
    title: '',
    body: ''
  }
  handleFormChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target)
    this
      .props
      .updateForm(this.state)
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