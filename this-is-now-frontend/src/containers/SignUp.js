import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'

import {connect} from "react-redux"
import { createUser } from '../actions/createUser';
// import {loginUser} from '../actions/loginUser'



class SignUp extends Component {

    state = {
        username: '',
        password: '',
        checkPassword: ''
    }


    handleOnSignup = () => {
        // debugger
        this.props.createUser(this.state.username, this.state.password, this.state.checkPassword)
        this.setState({
            username: '',
            password: '',
            checkPassword: ''
        })
        
      }  
    
      handleUsernameChange = (e) => {
          this.setState({
              username: e.target.value,
              password: this.state.password,
              checkPassword: this.state.checkPassword
          })
      }
    
      handlePasswordChange = (e) => {
        this.setState({
            username: this.state.username,
            password: e.target.value,
            checkPassword: this.state.checkPassword
        })
      }

      handleCheckPasswordChange = (e) => {
        this.setState({
            username: this.state.username,
            password: this.state.password,
            checkPassword: e.target.value
        })
      }


    render() {
        if (!!this.props.jwt) {
            return <Redirect push to="/activities"/>
        }
    return (
        <div className="SignUp">
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
                <label for="pass">Password (8 character minimum): </label>
                <input value={this.state.password} onChange={(e) => this.handlePasswordChange(e)} type="password" id="pass" name="password"
                    minlength="8" required>
                        </input>
            </div>
            <br/>

            <div>
                <label for="pass-confirm">Confirm Password: </label>
                <input value={this.state.checkPassword} onChange={(e) => this.handleCheckPasswordChange(e)} type="password" id="pass-confirm" name="password"
                    minlength="8" required>
                        </input>
            </div>

            <br/>
    
            <input onClick={() => this.handleOnSignup()} type="submit" value="Sign in"></input>
        </div>
      );
}
}

function mapState(currentState){
    return { 
        jwt: currentState.jwt,
        current_user_data: currentState.current_user_data
     }
  }


function mapDispatchToProps(dispatch){
    return {
        createUser: (UN, PW, CPW) => dispatch(createUser(UN, PW, CPW))
    }
  }
  
export default connect(mapState, mapDispatchToProps)(SignUp);