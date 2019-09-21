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

  render() {
    return(
      <Navbar brand={<Link to='/'>RedCarrots</Link>} alignLinks="right">
        <Link to='/ongoing'>
          Ongoing projects
        </Link>
        {this.renderOption()}
      </Navbar>
    )
  }
}

export default Nav;
