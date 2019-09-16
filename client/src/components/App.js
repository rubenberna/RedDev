import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Nav from '../components/navbar/Navbar'
import Home from '../views/Home'
import OngoingProjects from '../views/OngoingProjects'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <>
          <Route path="/" exact component={Home}/>
          <Route path="/ongoing" component={OngoingProjects}/>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
