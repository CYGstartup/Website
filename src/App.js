import React, { Component } from 'react';
import Gender from './Gender';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to Choose Your Gender pre-alpha v0.0.5</h2>
        <p>Please choose your gender.</p>
        <Gender name="female" />
        <Gender name="male" />
      </div>
    );
  }
}

export default App;