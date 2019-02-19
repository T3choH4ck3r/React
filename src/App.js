import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">         
          <p>
            Click google
          </p>
          <a
            className="App-link"
            href="wwww.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Test Local
          </a>
        </header>
        <span>Pushed Sucessfully </span>
      </div>
    );
  }
}

export default App;
