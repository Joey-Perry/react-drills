import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
    }
  }
  render(){
    return(
      <div className='App'>
      {this.state.data.map(item => {
          return (<h2>{item}</h2>);
        })}
      </div>
    )
  }
}

export default App;
