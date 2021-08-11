import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import fetchAllActivities from '../actions/fetchAllActivities';
import {connect} from "react-redux"
import { createUser } from '../actions/createUser';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// import {loginUser} from '../actions/loginUser'



class SignUp extends Component {

    state = {
        username: '',
        password: '',
        checkPassword: ''
    }


    handleOnSignup = (e) => {
        debugger
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
        if (!!this.props.jwt) {
            this.props.fetchAllActivities(this.props.jwt)
            return <Redirect push to="/activities"/>
        }
    return (

<>




            <Form style={{
        backgroundColor: 'white',
        // maxWidth: 250,
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

        // <div className="SignUp">
        //     <br/>
        //     <br/>
        //     <br/>
        //             <div>
        //         <label for="username">Username: </label>
        //         <input value={this.state.username} onChange={(e) => this.handleUsernameChange(e)} type="text" id="username" name="username">
        //         </input>
        //     </div>
        //     <br/>
        //     <div>
        //         <label for="pass">Password (8 character minimum): </label>
        //         <input value={this.state.password} onChange={(e) => this.handlePasswordChange(e)} type="password" id="pass" name="password"
        //             minLength="8" required>
        //                 </input>
        //     </div>
        //     <br/>

        //     <div>
        //         <label for="pass-confirm">Confirm Password: </label>
        //         <input value={this.state.checkPassword} onChange={(e) => this.handleCheckPasswordChange(e)} type="password" id="pass-confirm" name="password"
        //             minLength="8" required>
        //                 </input>
        //     </div>

        //     <br/>
    
        //     <input onClick={() => this.handleOnSignup()} type="submit" value="Sign in"></input>
        // </div>
      );
}
}

function mapState(currentState){
    return { 
        jwt: currentState.user.jwt,
        current_user_data: currentState.current_user_data
     }
  }


function mapDispatchToProps(dispatch){
    return {
        createUser: (UN, PW, CPW) => dispatch(createUser(UN, PW, CPW)),
        fetchAllActivities: (jwt) => dispatch(fetchAllActivities(jwt))
    }
  }
  
export default connect(mapState, mapDispatchToProps)(SignUp);