import React, { Component } from 'react';
import {connect} from "react-redux"
import { createNewActivityPost } from "../../actions/createNewActivity";
import AssociatedValue from './AssociatedValue';

class NewActivityForm extends Component {

    state = {
        name: '',
        description: '',
        numberOfvaluesAdded: 0,
        associatedValues: []
    }

    checkIn = (e,id, value, score) => {
        e.preventDefault()
        // 
        this.setState({
            name: this.state.name,
            description: this.state.description,
            numberOfvaluesAdded: this.state.numberOfvaluesAdded,
            associatedValues: [...this.state.associatedValues, {id: id, score: score}]
        })
        
    }

    checkOut = (e, id) => {
        e.preventDefault()        
        this.setState({
            name: this.state.name,
            description: this.state.description,
            numberOfvaluesAdded: this.state.numberOfvaluesAdded,
            associatedValues: this.state.associatedValues.filter((value) => value.id !== id)
        })
        
    }

        makeAssociatedValuesBasedOnNumberAssociated = () => {
            if(!this.props.requesting){
                const array = []
                
                for (let i = 0; i < this.state.numberOfvaluesAdded; i++) {
                    array.push(<AssociatedValue key={i} checkIn={this.checkIn} checkOut={this.checkOut}  id={i} all_values={this.props.all_values} associatedValues={this.state.associatedValues} index={i}/>)
                }
                return array
            }else{
                return null
            }
        }


    handleOnSubmit = (e) => {
        e.preventDefault()
        if(this.state.associatedValues.length > 0){
            this.props.callBack(this.state.name, this.state.description, this.state.associatedValues, sessionStorage.getItem('token'))
            this.setState({
                name: '',
                description: '',
                numberOfvaluesAdded: 0,
                associatedValues: []
            })
        }
    }

    handleOnNameChange = (e) => {
        this.setState({
            name: e.target.value,
            description: this.state.description,
            numberOfvaluesAdded: this.state.numberOfvaluesAdded,
            associatedValues: this.state.associatedValues
        })
    }

    handleOnDescriptionChange = (e) => {
        this.setState({
            name: this.state.name,
            description: e.target.value,
            numberOfvaluesAdded: this.state.numberOfvaluesAdded,
            associatedValues: this.state.associatedValues
        })
    }

    addAnotherValue = (e) => {
        e.preventDefault()
        this.setState({
            name: this.state.name,
            description:this.state.description,
            numberOfvaluesAdded: this.state.numberOfvaluesAdded + 1,
            associatedValues: this.state.associatedValues
        })
    }

    render() {
    return(
        <div className="container">
            <h3 className="form-title">Create a new Activity or Goal</h3>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form onSubmit={(e) => this.handleOnSubmit(e)} className="form-horizontal" >
                                    <div className="form-group">
                                        <label htmlFor="title" className="col-md-4 control-label">Activity/Goal</label>
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
                                    <mark>MUST HAVE AT LEAST ONE VALUE Associated</mark> <br></br>
                                    <button onClick={(e) => this.addAnotherValue(e)}>ADD ANOTHER VALUE</button>
                                    {this.makeAssociatedValuesBasedOnNumberAssociated()}
                                    <div className="form-group">
                                        <div className="col-md-6 col-md-offset-4">
                                        <button type="submit" className="btn btn-default">SUBMIT</button>
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
        token: currentState.user.token,
        current_user_data: currentState.user.current_user_data,
        all_values: currentState.values.values,
        requesting: currentState.requesting
     }
  }

function mapDispatchToProps(dispatch){
    return {
        createNewActivityPost: (name, description, valuesObjects, token) => dispatch(createNewActivityPost(name, description, valuesObjects, token)),
    }
  }
  
export default connect(mapState, mapDispatchToProps)(NewActivityForm);