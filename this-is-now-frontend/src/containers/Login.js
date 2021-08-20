import React, { Component } from 'react';
import {connect} from "react-redux"
import { fetchUser } from '../actions/fetchUser';
import  { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from "../components/Navbar"
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

//logic here is that when I login, the page re-renders because of change to store. After that, I will have user data but nothing else, in which case I should fetch the other data. If, however, I go to the login page
render() { 
  if (!!sessionStorage.getItem('token') && this.props.scores.length === 0) {
    this.props.fetchActivities(sessionStorage.getItem('token'))
    return <Redirect push to={`/users/${sessionStorage.getItem('username')}`}/>
  }else if(!!sessionStorage.getItem('token') && this.props.scores.length > 0){
    return <Redirect push to={`/users/${sessionStorage.getItem('username')}`}/>
  }
  return (
<>
<Navbar/>
<Form  onSubmit={(e) => this.handleOnLogin(e)}
  style={{
        backgroundColor: 'white',
        borderWidth: '5px',
        borderColor:'#aaaaaa', 
        borderStyle:'solid',
        position: 'absolute', left: '50%', top: '30%',
        transform: 'translate(-50%, -50%)'
      }}  className="LogIn">
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
    return { 
          fetchUser: (UN, PW) => dispatch(fetchUser(UN, PW)),
          fetchActivities: (token) => dispatch(fetchActivities(token))
    }
  }
//Left token in there so that page re-renders to redirect
  function mapState(currentState){
    return { 
        token: currentState.user.token,
        scores: currentState.scores.scores
        }
  }
  
export default connect(mapState, mapDispatchToProps)(Login);