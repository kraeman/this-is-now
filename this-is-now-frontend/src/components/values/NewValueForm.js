import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'

import {connect} from "react-redux"
// import { createValue } from '../actions/createNewActivity';
// import {loginUser} from '../actions/loginUser'



class NewValueForm extends Component {


    render() {
    
    return (
        <div className="container">
            <h3 className="form-title">Create a new value</h3>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form className="form-horizontal" >
                                    <div className="form-group">
                                        <label htmlFor="title" className="col-md-4 control-label">Value</label>
                                        <div className="col-md-5">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="title"
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
        // createUser: (UN, PW, CPW) => dispatch(createUser(UN, PW, CPW))
    }
  }
  
export default connect(mapState, mapDispatchToProps)(NewValueForm);