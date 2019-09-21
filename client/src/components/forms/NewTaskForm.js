import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { addTask } from '../../modules/dbQueries'
import { TextInput, Textarea, Toast, Button } from 'react-materialize'
import MenuDropdown from './Dropdown'

import './form.scss'

class NewTaskForm extends Component {
  state = {
    title: null,
    requester: null,
    description: null,
    type: null,
    ready: false,
    redirect: false
  }

  handleChange = (name, e) => {
    let change = {}
    let inputValue = e.target.value
    change[name] = inputValue
    this.setState({ ...change })
  }

  handleSelectType = (type) => {
    this.setState({ ...type })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { title, requester, description, type } = this.state
    const task = {
      title,
      requester,
      description,
      type,
      status: 'ongoing',
      dev: '',
      reqDate: new Date()
    }
    addTask(task)
    this.setState({ ready: true  })
  }

  renderButton = () => {
    // Validate if there are null values
    let array = Object.values(this.state)
    let incomplete = array.some(value => {return value === null})

    // Alert if there are null values
    if (incomplete) {
      return (
        <Toast
          waves="light"
          style={{marginRight: '5px'}}
          options={{html: 'New task incomplete'}}>
          Submit
        </Toast>
      )
      // Submit form otherwise
    } else return (
      <Button
        waves="light"
        style={{marginRight: '5px'}}
        onClick={ this.handleSubmit }>
        Submit
      </Button>
    )
  }

  render() {
    const {ready } = this.state
    if (ready ) { return <Redirect to='/ongoing' /> }

    return(
      <div className='task-form'>
        <h5>New task</h5>
        <TextInput  label='title' onChange={e => this.handleChange('title', e)}/>
        <MenuDropdown setType={ this.handleSelectType }/>
        <TextInput email validate label="your email" onChange={e => this.handleChange('requester', e)}/>
        <Textarea label='description'onChange={e => this.handleChange('description', e)} />
        {this.renderButton()}
      </div>
    )
  }
}

export default NewTaskForm;
