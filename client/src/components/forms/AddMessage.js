import React, { Component } from 'react'
import { Button, Textarea, TextInput, Icon } from 'react-materialize'

class AddMessage extends Component {
  state = {
    sendTo: this.props.sendTo,
    from: this.props.from,
    title: this.props.title
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.sendMessage(this.state)
  }

  render() {
    return(
      <form className='add-message' onSubmit={ this.handleSubmit }>
        Reply to {this.props.sendTo}
        <div className='add-message-text'>
          <Icon>mode_edit</Icon>
          <Textarea onChange={e => this.setState({ msg: e.target.value })}/>
        </div>
        <div className='add-message-send'>
          <TextInput type='file' onChange={e => this.setState({ file: e.target.files[0]})}/>
          <Button flat style={{ color: '#4caf50' }}>Send</Button>
        </div>
      </form>
    )
  }
}

export default AddMessage;
