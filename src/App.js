import React, { Component } from 'react';
import GenderList from './GenderList';

// CSS
import './animate.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
          <h1 className="title">Choose Your Gender <span className="version">pre-alpha v0.1.4</span></h1>
          <p>Please choose your gender.</p>
          <GenderList />
        </div>
        <div className="bottom">
      {/*<a href="ic8.link/13926">Page Icon</a>*/}
          © 2017
        </div>
      </div>
    );
  }
}

export default App;
