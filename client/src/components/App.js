import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Nav from '../components/navbar/Navbar'
import Home from '../views/Home'
import OngoingProjects from '../views/OngoingProjects'
import DeveloperProfile from '../views/DeveloperProfile'
import TaskView from '../views/TaskView'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <>
          <Route path="/" exact component={Home}/>
          <Route path="/ongoing" component={OngoingProjects}/>
          <Route path="/profile/:name" component={DeveloperProfile}/>
          <Route path="/task/:title" component={TaskView}/>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
