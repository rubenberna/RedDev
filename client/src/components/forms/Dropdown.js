import React, { Component } from 'react'
import { Select } from 'react-materialize'

class MenuDropdown extends Component {
  state = { type: ''}

  actionHandler = (e) => {
    this.setState({ type: e.target.value })
    this.props.setType({ type: e.target.value })
  }

  render () {
    let {type} = this.state
    return(
      <>
        <Select value={type} onChange={this.actionHandler} >
          <option value="" disabled defaultValue>
            Choose an option
          </option>
          <option value="design">
            Design
          </option>
          <option value="salesforce">
            Salesforce
          </option>
          <option value="development">
            Development
          </option>
        </Select>
      </>
    )
  }
}

export default MenuDropdown;
