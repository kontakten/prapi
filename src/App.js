import React, { Component } from 'react';
import './App.css';
import Userinput from './Userinput';


class App extends Component {


  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Søg</h3>
          <Userinput />
        </header>
      </div>
    );
  }
}

export default App;
