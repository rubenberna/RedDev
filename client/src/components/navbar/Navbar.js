import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'

import './navbar.scss'

class Nav extends Component {

  renderOption = () => {
    const { user } = this.props
    if(!user) return <Link to='/login'>Login</Link>
    else return <NavItem onClick={ this.props.logout }>Logout</NavItem>
  }

  renderDevPhoto = () => {
    const { user } = this.props
    if(user) return (
      <Link className='navbar-photo' to={`/profile/${user.name}`}>
        <img alt={ user.name } src={ user.photo } />
      </Link>
    )
  }

  render() {
    return(
      <Navbar brand={<Link to='/'><span style={{ color: '#c62828' }}>Red</span>Carrots</Link>} alignLinks="right">
      { this.renderDevPhoto() }
        <Link to='/ongoing'>
          Ongoing projects
        </Link>
        {this.renderOption()}
      </Navbar>
    )
  }
}

export default Nav;
