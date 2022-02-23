import React from 'react';
import './App.css';
import Login from './login';
import Register from './register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App () {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/login">  <Login /> </Route>
          <Route path="/register"> <Register /> </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
