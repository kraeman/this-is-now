import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'

import {connect} from "react-redux"
import { createNewValuePost } from '../../actions/createNewValue';
// import {loginUser} from '../actions/loginUser'



class NewValueForm extends Component {

    state = {
        name: ""
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        debugger
        this.props.createNewValuePost(this.state.name, this.props.jwt)
        this.setState({
            name: ''
        })
    }

    handleOnNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }


    render() {
    
    return (
        <div className="container">
            <h3 className="form-title">Create a new value</h3>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form onSubmit={(e) => this.handleOnSubmit(e)} className="form-horizontal" >
                                    <div className="form-group">
                                        <label htmlFor="title" className="col-md-4 control-label">Value</label>
                                        <div className="col-md-5">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="title"
                                            onChange={(e) => this.handleOnNameChange(e)}
                                            value={this.state.name}
                                            required
                                        />
                                        </div>


                                        
                                    </div>


                                    

                                    <div className="form-group">
                                        <div className="col-md-6 col-md-offset-4">
                                        <button type="submit" className="btn btn-default">Add</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
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
        createNewValuePost: (name) => dispatch(createNewValuePost(name))
    }
  }
  
export default connect(mapState, mapDispatchToProps)(NewValueForm);