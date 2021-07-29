import React, { Component } from 'react';
// import  { Redirect } from 'react-router-dom'

import {connect} from "react-redux"
import { createNewActivityPost } from "../../actions/createNewActivity";
import AssociatedValue from './AssociatedValue';
// import {loginUser} from '../actions/loginUser'



class NewActivityForm extends Component {


    state = {
        name: '',
        description: '',
        valuesObjects:[],
        numberOfvaluesAdded: 1

    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.createNewActivityPost(this.state.name, this.state.description, this.state.valuesObjects, this.props.jwt)
        this.setState({
            name: '',
            description: '',
            valuesObjects:{},
            numberOfvaluesAdded: 1
        })
    }

    handleOnNameChange = (e) => {
        this.setState({
            name: e.target.value,
            description: this.state.description,
            valuesObjects: this.state.valuesObjects,
            numberOfvaluesAdded: this.state.numberOfvaluesAdded
        })
    }


    handleOnDescriptionChange = (e) => {
        this.setState({
            name: this.state.name,
            description: e.target.value,
            valuesObjects: this.state.valuesObjects,
            numberOfvaluesAdded: this.state.numberOfvaluesAdded
        })
    }


    handleOnValueScoreChange = () => {
        this.setState({
            name: this.state.name,
            description: this.state.description,
            valuesObjects: {},
            numberOfvaluesAdded: this.state.numberOfvaluesAdded
        })
    }

    handleOnValueChange = (e) => {
        debugger
        this.setState({
            name: this.state.name,
            description:this.state.description,
            valuesObjects: [...this.state.valuesObjects, {value: e.target.value, score: 1}],
            numberOfvaluesAdded: this.state.numberOfvaluesAdded
        })
    }

   

    addAnotherValue = (e) => {
        this.setState({
            name: this.state.name,
            description:this.state.description,
            valuesObjects: [...this.state.valuesObjects, {value: e.target.value, score: 1}],
            numberOfvaluesAdded: this.state.numberOfvaluesAdded + 1
        })
    }

    makeValuesBasedOnNumberAssociated = () => {
        for (let i = 0; i < this.state.numberOfvaluesAdded; i++) {
            return <AssociatedValue index={i}/>
          }
    }


    render() {
    
    return(
        <div className="container">
            <h3 className="form-title">Create a new Activity</h3>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form onSubmit={(e) => this.handleOnSubmit(e)} className="form-horizontal" >
                                    <div className="form-group">
                                        <label htmlFor="title" className="col-md-4 control-label">Activity</label>
                                        <div className="col-md-5">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="title"
                                            value={this.state.name}
                                            onChange={(e) => this.handleOnNameChange(e)}
                                            required
                                        />
                                        </div>


                                        <label className="col-md-4 control-label">Description</label>
                                        <div className="col-md-5">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="title"
                                            value={this.state.description}
                                            onChange={(e) => this.handleOnDescriptionChange(e)}
                                            required
                                        />
                                        </div>
                                    </div>

                                    {this.makeValuesBasedOnNumberAssociated()}
                                    
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
        jwt: currentState.users.jwt,
        current_user_data: currentState.users.current_user_data,
        all_values: currentState.values.values
     }
  }


function mapDispatchToProps(dispatch){
    return {
        createNewActivityPost: (name, description, valuesObjects, jwt) => dispatch(createNewActivityPost(name, description, valuesObjects, jwt))
    }
  }
  
export default connect(mapState, mapDispatchToProps)(NewActivityForm);