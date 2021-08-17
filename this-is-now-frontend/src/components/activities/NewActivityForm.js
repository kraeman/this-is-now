import React, { Component } from 'react';
import {connect} from "react-redux"
import AssociatedValue from './AssociatedValue';

class NewActivityForm extends Component {

    state = {
        name: '',
        description: '',
        numberOfValuesAddedToActivity: 0,
        associatedValues: []
    }

    checkIn = (e, id, score) => {
        e.preventDefault()
        this.setState({
            name: this.state.name,
            description: this.state.description,
            numberOfValuesAddedToActivity: this.state.numberOfValuesAddedToActivity,
            associatedValues: [...this.state.associatedValues, {id: id, score: score}]
        })
        
    }

    checkOut = (e, id) => {
        e.preventDefault()        
        this.setState({
            name: this.state.name,
            description: this.state.description,
            numberOfValuesAddedToActivity: this.state.numberOfValuesAddedToActivity,
            associatedValues: this.state.associatedValues.filter((value) => value.id !== id)
        })
        
    }

        makeAssociatedValuesBasedOnNumberAssociated = () => {
            //numberOfValuesAddedToActivity and the length of this.state.associatedValues is different because one is checked in values and one is number of components regardless of checked in or out
            // if(!this.props.requesting){
                const arrayOfAssociatedValueComponents = []
                for (let i = 0; i < this.state.numberOfValuesAddedToActivity; i++) {
                    arrayOfAssociatedValueComponents.push(<AssociatedValue key={i} checkIn={this.checkIn} checkOut={this.checkOut} all_values={this.props.all_values} associatedValues={this.state.associatedValues}/>)
                }
                return arrayOfAssociatedValueComponents
            // }
        }


    handleOnSubmit = (e) => {
        e.preventDefault()
        if(this.state.associatedValues.length > 0){
            this.props.createNewActivity(this.state.name, this.state.description, this.state.associatedValues)
            this.setState({
                name: '',
                description: '',
                numberOfValuesAddedToActivity: 0,
                associatedValues: []
            })
        }
    }

    handleOnNameChange = (e) => {
        this.setState({
            name: e.target.value,
            description: this.state.description,
            numberOfValuesAddedToActivity: this.state.numberOfValuesAddedToActivity,
            associatedValues: this.state.associatedValues
        })
    }

    handleOnDescriptionChange = (e) => {
        this.setState({
            name: this.state.name,
            description: e.target.value,
            numberOfValuesAddedToActivity: this.state.numberOfValuesAddedToActivity,
            associatedValues: this.state.associatedValues
        })
    }

    addAnotherAssociatedValueComponent = (e) => {
        e.preventDefault()
        this.setState({
            name: this.state.name,
            description:this.state.description,
            numberOfValuesAddedToActivity: this.state.numberOfValuesAddedToActivity + 1,
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
                                    <mark>MUST HAVE AT LEAST ONE VALUE ASSOCIATED</mark> <br></br>
                                    <button onClick={(e) => this.addAnotherAssociatedValueComponent(e)}>ADD ANOTHER VALUE</button>
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
        all_values: currentState.values.values
        // requesting: currentState.requesting
     }
  }
  
export default connect(mapState)(NewActivityForm);