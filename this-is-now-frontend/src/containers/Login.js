import React, { Component } from 'react';
import {connect} from "react-redux"
import { fetchToken } from '../actions/fetchToken';
import  { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from "./Navbar"

import fetchAllActivities from '../actions/fetchAllActivities';



class Login extends Component {

    state = {
        username: '',
        password: ''
    }


  handleOnLogin = (e) => {
    e.preventDefault()
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
  debugger
  if (!!sessionStorage.getItem('token')) {
    this.props.fetchAllActivities(sessionStorage.getItem('token'))
    return <Redirect push to="/activities"/>
}
  return (

<>
<Navbar location={"login"}/>
<Form  style={{
        backgroundColor: 'white',
        // maxWidth: 250,
        borderWidth: '5px',
        borderColor:'#aaaaaa', 
        borderStyle:'solid',
        position: 'absolute', left: '50%', top: '30%',
        transform: 'translate(-50%, -50%)'
        
      }} onSubmit={(e) => this.handleOnLogin(e)} className="LogIn">
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username   </Form.Label>
                    <Form.Control size="lg"  value={this.state.username} onChange={(e) => this.handleUsernameChange(e)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password   </Form.Label>
                    <Form.Control size="lg" type="password" value={this.state.password} onChange={(e) => this.handlePasswordChange(e)} />
                </Form.Group>

<br/>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>




</>

    // <div className="Login">
    //     <br/>
    //     <br/>
    //     <br/>
    //             <div>
    //         <label style={{fontSize: '80px'}} for="username">Username: </label>
    //         <input style={{fontSize: '75px'}} value={this.state.username} onChange={(e) => this.handleUsernameChange(e)} type="text" id="username" name="username">
    //         </input>
    //     </div>
    //     <br/>
    //     <div>
    //         <label style={{fontSize: '80px'}} for="pass">Password: </label>
    //         <input style={{fontSize: '75px'}} value={this.state.password} onChange={(e) => this.handlePasswordChange(e)} type="password" id="pass" name="password"
    //             minlength="8" required>
    //                 </input>
    //     </div>
    //     <br/>

    //     <input onClick={() => this.handleOnLogin()} type="submit" value="Sign in"></input>
    // </div>
  );

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