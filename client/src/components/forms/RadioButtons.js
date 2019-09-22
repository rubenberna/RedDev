import React, { Component } from 'react'
import { RadioGroup, Button } from 'react-materialize'

const devNames = [
  { label: 'Manar', value: 'Manar'},
  { label: 'Davy', value: 'Davy'},
  { label: 'Ruben', value: 'Ruben'},
]

class RadioButtons extends Component {
  state = {
    assignee: null
  }

  handleChange = (e) => {
    this.setState({ assignee: e.target.value })
  }

  handleSubmit = (e) => {
    this.props.assign(this.state.assignee)
  }

  render() {
    const { assignee } = this.state
    return(
      <div className='radio-btn-form'>
        <RadioGroup
          name="size"
          withGap
          label="T-Shirt Size"
          value={assignee}
          onChange={ e => this.handleChange(e) }
          options={devNames}
          />
          <Button flat waves="light" onClick={ this.handleSubmit } >
            Assign
          </Button>
      </div>
    )
  }
}

export default RadioButtons;
