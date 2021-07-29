import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'

import {connect} from "react-redux"
import { createNewActivityPost } from "../../actions/createNewActivity";
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

    makeOptionForEveryValue = () => {
        // debugger
        //DONT LET CHOSEN VALUES COME UP IN NEXT LIST
        return this.props.all_values.map(value => {
            return <option id={value.id} value={value.id}>{value.name}</option>
        })
    }

    addAnotherValue = () => {
        
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


                                    <label for="values">Add a Value</label>

                                    <select onChange={(e) => this.handleOnValueChange(e)} name="values" id="values">
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
                                    <button id="value_1" onClick={() => this.addAnotherValue()}>ADD ANOTHER VALUE</button>

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