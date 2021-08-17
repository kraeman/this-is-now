import React, { Component } from 'react';
import {connect} from "react-redux"
import { fetchUser } from '../actions/fetchUser';
import  { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from "./Navbar"
import fetchActivities from '../actions/fetchActivities';


class Login extends Component {
    state = {
        username: '',
        password: ''
    }

  handleOnLogin = (e) => {
    e.preventDefault()
    this.props.fetchUser(this.state.username, this.state.password)
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
  if (!!sessionStorage.getItem('token')) {
    this.props.fetchActivities(sessionStorage.getItem('token'))
    return <Redirect push to="/activities"/>
}
  return (
<>
<Navbar location={"login"}/>
<Form  style={{
        backgroundColor: 'white',
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
  );
}
}

function mapDispatchToProps(dispatch){
    return { fetchUser: (UN, PW) => dispatch(fetchUser(UN, PW)),
              fetchActivities: (token) => dispatch(fetchActivities(token))
    }
  }

  function mapState(currentState){
    return { 
        token: currentState.user.token,
        current_user_data: currentState.current_user_data
     }
  }
  
export default connect(mapState, mapDispatchToProps)(Login);