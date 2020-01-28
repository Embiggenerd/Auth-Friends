import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import {  Login, Public, Protected, PrivateRoute, Header } from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Auth Friends</h1>
        <Switch>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />          
          <PrivateRoute path='/protected' component={Protected} />
          <Route path="/" component={Header} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
