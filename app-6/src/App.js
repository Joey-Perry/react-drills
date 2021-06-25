import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo.js'
class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      taskList: [],
      task: '',
    }
  }

  handleChange = (e) => {
    this.setState({ task: e.target.value })
  }

  addTask = () => {
    this.setState((state) => {
      return {
        taskList: [...state.taskList, state.task],
        task: '',
      }
    })
  }

  render(){
    return(
      <div className='App'>
        <h1> My to-do list:</h1>
        <input value={this.state.task} onChange={this.handleChange} />
        <button onClick={this.addTask}>Add </button>
        {this.state.taskList.map(item => {
          return <Todo task={item} />
        })}
      </div>
    )
  }
}

export default App;
