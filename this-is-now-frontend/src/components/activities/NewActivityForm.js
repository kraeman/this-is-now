import React, { Component } from 'react';
// import  { Redirect } from 'react-router-dom'

import {connect} from "react-redux"
import { createNewActivityPost } from "../../actions/createNewActivity";
import AssociatedValue from './AssociatedValue';
import fetchAllValues from '../../actions/fetchAllValues'
// import fetchAllActivities from '../../actions/fetchAllActivities'
import fetchScores from '../../actions/fetchScores';
// import {loginUser} from '../actions/loginUser'



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
        // 
        // const index = this.state.associatedValues.findIndex((value) => value.id === id)
        
        this.setState({
            name: this.state.name,
            description: this.state.description,
            numberOfvaluesAdded: this.state.numberOfvaluesAdded,
            associatedValues: this.state.associatedValues.filter((value) => value.id !== id)
        })
        
    }

    // addAssociatedValue() {
        //     this.setState({...this.state, numberOfvaluesAdded: this.addAnotherValue()})
        
        // }
        
        // componentDidMount() {
        //     this.props.fetchAllValues(this.props.jwt)
        //     //fetching activities shopulkd be done in container!!!!!!!!!
        // }

        
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
        // 
        if(this.state.associatedValues.length > 0){
            this.props.callBack(this.state.name, this.state.description, this.state.associatedValues, sessionStorage.getItem('token'))
            // this.props.createNewActivityPost(this.state.name, this.state.description, this.state.associatedValues, this.props.jwt)
            this.setState({
                name: '',
                description: '',
                numberOfvaluesAdded: 0,
                associatedValues: []
            })
        }
        // this.props.callBack()
       
            // this.props.callBack()
    
        // if(this.props.requesting === false){
        //     this.props.fetchScores(this.props.jwt)
        // }
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


    // handleOnValueScoreChange = () => {
    //     this.setState({
    //         name: this.state.name,
    //         description: this.state.description,
    //         numberOfvaluesAdded: this.state.numberOfvaluesAdded
    //     })
    // }

    // handleOnValueChange = (e) => {
    //     
    //     this.setState({
    //         name: this.state.name,
    //         description:this.state.description,
    //         numberOfvaluesAdded: this.state.numberOfvaluesAdded
    //     })
    // }

   

    addAnotherValue = (e) => {
        e.preventDefault()
        // 
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
        jwt: currentState.user.jwt,
        current_user_data: currentState.user.current_user_data,
        all_values: currentState.values.values,
        requesting: currentState.requesting
     }
  }


function mapDispatchToProps(dispatch){
    return {
        createNewActivityPost: (name, description, valuesObjects, jwt) => dispatch(createNewActivityPost(name, description, valuesObjects, jwt)),
        fetchAllValues: (jwt) => dispatch(fetchAllValues(jwt)),
        // fetchAllActivities: (jwt) => dispatch(fetchAllActivities(jwt)),
        fetchScores: (jwt) => dispatch(fetchScores(jwt))
    }
  }
  
export default connect(mapState, mapDispatchToProps)(NewActivityForm);