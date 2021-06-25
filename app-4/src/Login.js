import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    updateName = (e) => {
        this.setState({ username: e.target.value })
    }

    updatePass = (e) => {
        this.setState({ password: e.target.value })
    }

    loginUser = () => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render(){
        return (
            <>
            <input value={this.state.username} onChange={this.updateName} />
            <input value={this.state.password} onChange={this.updatePass} />
            <button onClick={this.loginUser}>Login </button>
            </>
        )
    }
}

export default Login