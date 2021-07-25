import React, { Component } from 'react';
import {connect} from "react-redux"
import { fetchToken } from '../actions/fetchToken';


class Login extends Component {

    state = {
        username: '',
        password: ''
    }


  handleOnLogin = () => {
    this.props.fetchToken(this.state.username, this.state.password)
    this.setState({
        username: '',
        password: ''
    })
  }  

  handleUsernameChange = (e) => {
      this.setState({
          username: e.target.value,
          password: this.state.password
      })
  }

  handlePasswordChange = (e) => {
    this.setState({
        username: this.state.username,
        password: e.target.value
    })
  }


render() {
  return (
    <div className="Login">
        <br/>
        <br/>
        <br/>
                <div>
            <label for="username">Username: </label>
            <input value={this.state.username} onChange={(e) => this.handleUsernameChange(e)} type="text" id="username" name="username">
            </input>
        </div>
        <br/>
        <div>
            <label for="pass">Password: </label>
            <input value={this.state.password} onChange={(e) => this.handlePasswordChange(e)} type="password" id="pass" name="password"
                minlength="8" required>
                    </input>
        </div>
        <br/>

        <input onClick={() => this.handleOnLogin()} type="submit" value="Sign in"></input>
    </div>
  );
}
}


function mapDispatchToProps(dispatch){
    return { fetchToken: (UN, PW) => dispatch(fetchToken(UN, PW)) }
  }
  
export default connect(null, mapDispatchToProps)(Login);