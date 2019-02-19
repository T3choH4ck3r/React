import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          { <img src={logo} className="App-logo" alt="logo" /> }
          <p>
            Click google
          </p>
          <a
            className="App-link"
            href="wwww.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
        </header>
      </div>
    );
  }
}

export default App;
