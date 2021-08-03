import React, { Component } from 'react';
import {connect} from "react-redux"
import { fetchToken } from '../actions/fetchToken';
import  { Redirect } from 'react-router-dom'
import fetchAllActivities from '../actions/fetchAllActivities';



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
  if (!!this.props.jwt) {
    this.props.fetchAllActivities(this.props.jwt)
    return <Redirect push to="/activities"/>
}else{
  return (
    <div className="Login">
        <br/>
        <br/>
        <br/>
                <div>
            <label style={{fontSize: '80px'}} for="username">Username: </label>
            <input style={{fontSize: '75px'}} value={this.state.username} onChange={(e) => this.handleUsernameChange(e)} type="text" id="username" name="username">
            </input>
        </div>
        <br/>
        <div>
            <label style={{fontSize: '80px'}} for="pass">Password: </label>
            <input style={{fontSize: '75px'}} value={this.state.password} onChange={(e) => this.handlePasswordChange(e)} type="password" id="pass" name="password"
                minlength="8" required>
                    </input>
        </div>
        <br/>

        <input onClick={() => this.handleOnLogin()} type="submit" value="Sign in"></input>
    </div>
  );
}
}
}


function mapDispatchToProps(dispatch){
    return { fetchToken: (UN, PW) => dispatch(fetchToken(UN, PW)),
              fetchAllActivities: (jwt) => dispatch(fetchAllActivities(jwt))
    }
  }

  function mapState(currentState){
    return { 
        jwt: currentState.user.jwt,
        current_user_data: currentState.current_user_data
     }
  }
  
export default connect(mapState, mapDispatchToProps)(Login);