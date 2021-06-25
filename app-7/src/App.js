import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask'
import List from './List'

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      taskList: [],
      task: ''
    }
  }

  addTask = (task) => {
    this.setState((state) => {
      return {
        taskList: [...state.taskList, task]
      }
    })
  }
  render(){
    return (
      <div className='App'>
        <h1> My to-do list:</h1>
        <NewTask handleAdd={this.addTask} />
        <List taskList={this.state.taskList} />
      </div>
    )
  }
}

export default App;
