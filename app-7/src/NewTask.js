import React, { Component } from 'react'

class NewTask extends Component{
    constructor(props){
        super(props)

        this.state = {
            task: '',
        }
    }

    handleChange = (e) => {
        this.setState({ task: e.target.value })
    }

    addTask = () => {
        this.props.handleAdd(this.state.task)
    }

    render(){
        return (
            <>
                <input value={this.state.task} onChange={this.handleChange} />
                <button onClick={this.addTask}>Add</button>
            </>
        )
    }
}

export default NewTask