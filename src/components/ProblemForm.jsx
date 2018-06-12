import React, {Component} from "react"
import {Button, Input, TextArea, Form} from "semantic-ui-react"

class ProblemForm extends Component {
 render() {
  return (
   <Form className='form-container'>
    <Form.Field>
    <label>Title</label>
     <Input focus placeholder='Title' id='title-bar'/>
    </Form.Field>
    <Form.Field>
     <TextArea focus placeholder='Describe your programming problem in detail' style={{
      minHeight: 100
     }}/>
    </Form.Field>
    <Form.Field>
    <label>Tags</label>
    <Input focus placeholder='Tags' id='tags-bar'/>
    </Form.Field>
    <Button color="black" type='submit'>Submit Your Question</Button>
   </Form>
  )
 }
}

export default ProblemForm