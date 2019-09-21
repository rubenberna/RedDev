import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { getDevs } from '../modules/dbQueries'

import Nav from '../components/navbar/Navbar'
import Home from '../views/Home'
import OngoingProjects from '../views/OngoingProjects'
import DeveloperProfile from '../views/DeveloperProfile'
import TaskView from '../views/TaskView'
import Login from '../views/Login'

class App extends Component {
  state = {
    devs: [],
    user: JSON.parse(localStorage.getItem('user')),
  }

  async componentDidMount() {
    const devs = await getDevs()
    this.setState({ devs })
  }

  setDev = (dev) => {
    localStorage.setItem('user', JSON.stringify(dev))
    this.setState({ user: dev })
  }

  logoutUser = () => {
    console.log('logged out');
    localStorage.removeItem('user')
    this.setState({
      user: null
    })
  }

  render () {
    const { user } = this.state
    return (
      <>
        <BrowserRouter>
          <Nav user={user} logout={this.logoutUser}/>
          <>
            <Route
              path="/"
              exact
              render={props => <Home {...props} devs={this.state.devs} />}
            />
            <Route
              path="/ongoing"
              component={OngoingProjects}
            />
            <Route
              path="/profile/:name"
              component={DeveloperProfile}
            />
            <Route
              path="/task/:title"
              component={TaskView}
            />
            <Route
              path="/login"
              exact
              render={props => <Login {...props} devs={this.state.devs} setDev={this.setDev}/>}
            />
          </>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
