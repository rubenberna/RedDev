import React, { Component } from 'react'
import { Button, Textarea, TextInput, Icon } from 'react-materialize'

class AddMessage extends Component {
  state = {
    sendTo: this.props.sendTo,
    from: this.props.from,
    title: this.props.task.title,
    taskDate: this.props.task.reqDate,
    id: this.props.task.id,
    file: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.sendMessage(this.state)
  }

  render() {
    return(
      <form className='add-message' onSubmit={ this.handleSubmit }>
      <div>
        Reply to <strong>{this.props.sendTo}</strong>
        <div className='add-message-text'>
          <Icon>mode_edit</Icon>
          <Textarea onChange={e => this.setState({ msg: e.target.value })}/>
        </div>
      </div>
        <div className='add-message-send'>
          <TextInput type='file' onChange={e => this.setState({ file: e.target.files[0]})}/>
          <Button flat className='send-msg-btn'>Send</Button>
        </div>
      </form>
    )
  }
}

export default AddMessage;
