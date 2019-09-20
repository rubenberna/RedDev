import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-materialize'

import './navbar.scss'

class Nav extends Component {
  render() {
    return(
      <Navbar brand={<Link to='/'>RedCarrots</Link>} alignLinks="right">
        <Link to='/ongoing'>
          Ongoing projects
        </Link>
        <Link to='/login'>
          Login
        </Link>
      </Navbar>
    )
  }
}

export default Nav;
