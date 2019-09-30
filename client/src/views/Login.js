import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LoginForm from '../components/forms/LoginForm'

class Login extends Component {

  state = {
    wrongCredentials: false,
    user: ''
  }

  validateUser = (user) => {
    const { devs, history, setDev } = this.props
    const dev = devs.find( dev => dev.email === user.email )
    if (!dev) this.setState({ wrongCredentials: true })
    else {
      if ( dev.password !== user.password ) {
        this.setState({
          wrongCredentials: true
        })
      } else {
        setDev(dev)
        history.push('/')
      }
    }

  }

  render() {
    return(
      <div className='login'>
        {this.state.wrongCredentials && <h6 className='wrong'>Wrong credentials</h6>}
        <LoginForm
          validate={ this.validateUser }
          wrongCredentials={this.state.wrongCredentials}/>
      </div>
    )
  }
}

export default withRouter(Login);
