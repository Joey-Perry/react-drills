import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)


    this.state = {
      userInput: '',
    }
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value })
  }

  render(){
    return (
      <div className='App'>
        <input value={this.state.userInput} onChange={this.handleChange} />
        <h2>{this.state.userInput}</h2>
      </div>
    )
  }
}

export default App;
