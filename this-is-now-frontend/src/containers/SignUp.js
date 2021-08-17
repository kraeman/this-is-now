import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import fetchActivities from '../actions/fetchActivities';
import {connect} from "react-redux"
import { createUser } from '../actions/createUser';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Navbar from "./Navbar"


class SignUp extends Component {

    state = {
        username: '',
        password: '',
        checkPassword: ''
    }

    handleOnSignup = (e) => {
        e.preventDefault()
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
        if (!!sessionStorage.getItem('token')) {
            this.props.fetchActivities(sessionStorage.getItem('token'))
            return <Redirect push to="/activities"/>
        }
    return (

<>

    <Navbar location={"signup"}/>

            <Form  style={{
        backgroundColor: 'white',
        borderWidth: '5px',
        borderColor:'#aaaaaa', 
        borderStyle:'solid',
        position: 'absolute', left: '50%', top: '30%',
        transform: 'translate(-50%, -50%)'
      }} onSubmit={(e) => this.handleOnSignup(e)} className="SignUp">
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username   </Form.Label>
                    <Form.Control size="lg"  value={this.state.username} onChange={(e) => this.handleUsernameChange(e)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password   </Form.Label>
                    <Form.Control size="lg" type="password" value={this.state.password} onChange={(e) => this.handlePasswordChange(e)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password   </Form.Label>
                    <Form.Control size="lg" type="password" value={this.state.checkPassword} onChange={(e) => this.handleCheckPasswordChange(e)} />
                </Form.Group>
<br/>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
</>
      );
}
}

function mapState(currentState){
    return { 
        token: currentState.user.token,
        current_user_data: currentState.current_user_data
     }
  }


function mapDispatchToProps(dispatch){
    return {
        createUser: (UN, PW, CPW) => dispatch(createUser(UN, PW, CPW)),
        fetchActivities: (token) => dispatch(fetchActivities(token))
    }
  }
  
export default connect(mapState, mapDispatchToProps)(SignUp);