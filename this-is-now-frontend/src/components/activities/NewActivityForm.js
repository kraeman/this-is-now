import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'

import {connect} from "react-redux"
import { createNewActivityPost } from "../../actions/createNewActivity";
// import {loginUser} from '../actions/loginUser'



class NewActivityForm extends Component {

    makeOptionForEveryValue = () => {
        return <option>hello</option>
    }


    render() {
    
    return(
        <div className="container">
            <h3 className="form-title">Create a new Activity</h3>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form className="form-horizontal" >
                                    <div className="form-group">
                                        <label htmlFor="title" className="col-md-4 control-label">Activity</label>
                                        <div className="col-md-5">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="title"
                                            required
                                        />
                                        </div>


                                        <label className="col-md-4 control-label">Description</label>
                                        <div className="col-md-5">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="title"
                                            required
                                        />
                                        </div>
                                    </div>


                                    <label for="values">Add a Value</label>

                                    <select name="values" id="values">
                                        {this.makeOptionForEveryValue()}
                                    </select>


                                    <label for="scores">Assign a score </label>

                                    <select name="scores" id="scores">
                                        {/* <option value="null">1-10</option> */}
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>


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
        createNewActivityPost: (UN, PW, CPW) => dispatch(createNewActivityPost(UN, PW, CPW))
    }
  }
  
export default connect(mapState, mapDispatchToProps)(NewActivityForm);