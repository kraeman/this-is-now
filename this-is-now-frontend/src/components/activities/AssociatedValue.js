import React, { Component } from 'react';
// import  { Redirect } from 'react-router-dom'

import {connect} from "react-redux"
// import { createNewActivityPost } from "../../actions/createNewActivity";
// import {loginUser} from '../actions/loginUser'



class AssociatedValue extends Component {

    state = {
        name: "",
        score: 1,
        // buttonText: "Add Value"
    }

  

    handleOnNameChange = (e) => {
        const theValue = this.props.all_values.find(value=> value.id === e.target.value)
        this.setState({
            name: theValue.attributes.name,
            score: this.state.score
            // buttonText: this.state.buttonText
        })
        // debugger
    }


    handleOnValueScoreChange = (e) => {
        this.setState({
            name: this.state.name,
            score: e.target.value,
            // buttonText: this.state.buttonText
        })
    }
    makeOptionForEveryValue = () => {
        //DONT LET CHOSEN VALUES COME UP IN NEXT LIST
        // debugger
        return this.props.all_values.map(value => {
                return <option key={value.id} id={value.id} value={value.id}>{value.attributes.name}</option>
            })
          
    }

    onSubmit = (e) => {
        // debugger
        if(e.target.textContent === "Add Value"){
            e.target.textContent = "Remove Value"
            // e.target.disabled = true
            // debugger
            this.props.checkIn(e, this.props.id, this.state.name, this.state.score)
        }else if(e.target.textContent === "Remove Value")  {
            e.target.textContent = "Add Value"
            // e.target.disabled = true
            // debugger
            this.props.checkOut(e, this.props.id, this.state.name, this.state.score)
        }  
    }
    
    render() {
    
    return(
        <div id={this.props.id} className="container">
            <label for="values">Add a Value</label>

            <select onChange={(e) => this.handleOnNameChange(e)} name="values" id="values">
                <option value={null}></option>
                {this.makeOptionForEveryValue()}
            </select>


            <label for="scores">Assign a score </label>

            <select onChange={(e) => this.handleOnValueScoreChange(e)} name="scores" id="scores">
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