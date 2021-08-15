import React, { Component } from 'react';
// import  { Redirect } from 'react-router-dom'

import {connect} from "react-redux"
// import { createNewActivityPost } from "../../actions/createNewActivity";
// import {loginUser} from '../actions/loginUser'



class AssociatedValue extends Component {

    state = {
        name: "",
        score: 1,
        checkedIn: false,
        id: null
        // buttonText: "Add Value"
    }

  

    handleOnNameChange = (e) => {
        const theValue = this.props.all_values.find(value => value.id == e.target.value)
        debugger
        this.setState({
            name: theValue.name,
            score: this.state.score,
            checkedIn: this.state.checkedIn,
            id: theValue.id
            // buttonText: this.state.buttonText
        })
        // debugger
    }


    handleOnValueScoreChange = (e) => {
        this.setState({
            name: this.state.name,
            score: e.target.value,
            checkedIn: this.state.checkedIn,
            id: this.state.id
            // buttonText: this.state.buttonText
        })
    }
    makeOptionForEveryValue = () => {
        //DONT LET CHOSEN VALUES COME UP IN NEXT LIST
        // debugger
        if(!this.props.all_values || this.props.values === []) {
            return null
        }else{
            const arrayOfUnwantedIds = this.props.associatedValues.map(value => value.id)
            let arrayOfGood = this.props.all_values.filter(value => !arrayOfUnwantedIds.includes(value.id))
            return arrayOfGood.map(value => {
                return <option key={value.id} id={value.id} value={value.id}>{value.name}</option>
            })
        }
          
    }

    onSubmit = (e) => {
        debugger
        
        if(e.target.textContent === "Add Value" && this.state.id !== null){
            this.setState({
                name: this.state.name,
                score: this.state.score,
                checkedIn: true,
                id: this.state.id
            })
            e.target.textContent = "Remove Value"
            // e.target.disabled = true
            // debugger
            this.props.checkIn(e, this.state.id, this.state.name, this.state.score)
            //should i reset state herw???
        }else if(e.target.textContent === "Remove Value")  {
            this.setState({
                name: this.state.name,
                score: this.state.score,
                checkedIn: false,
                id: this.state.id
            })
            e.target.textContent = "Add Value"
            // e.target.disabled = true
            // debugger
            //SShould i reset state here?
            this.props.checkOut(e, this.state.id, this.state.name, this.state.score)
        }  
    }
    
    render() {
    
    return(
        <div id={this.state.id} className="container">
            <label for="values">Add a Value</label>

            <select disabled={this.state.checkedIn} onChange={(e) => this.handleOnNameChange(e)} name="values" id="values">
                <option value={null}>{this.state.name}</option>
                {this.makeOptionForEveryValue()}
            </select>


            <label for="scores">Assign a score </label>

            <select disabled={this.state.checkedIn} onChange={(e) => this.handleOnValueScoreChange(e)} name="scores" id="scores">
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
            
            <button onClick={(e) => this.onSubmit(e)}>Add Value</button>
        </div>
    )
    
    }
}

export default AssociatedValue