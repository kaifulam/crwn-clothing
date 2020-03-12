import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
};

function App() {
  // <Route exact path component>
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

// Route provides History, Location and Match, but only pass one child in. So to pass props down to grandchildren, we have to use withRouter. Props tunneling, passing down props down the levels only to pass it on is a bad practice.