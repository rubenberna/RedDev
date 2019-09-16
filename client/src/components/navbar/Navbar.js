import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'

import './navbar.scss'

class Nav extends Component {
  render() {
    return(
      <Navbar brand={<Link to='/'>RedCarrots</Link>} alignLinks="right">
        <NavItem href="">
          Ongoing projects
        </NavItem>
        <NavItem href="components.html">
          Login
        </NavItem>
      </Navbar>
    )
  }
}

export default Nav;
