import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Button />
        </header>
      </div>
    );
  }
}

export default App;
