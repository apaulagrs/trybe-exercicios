import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/welcome" component={ Welcome } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
