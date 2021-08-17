import React, { Component } from 'react';

class AssociatedValue extends Component {

    state = {
        name: "",
        score: 1,
        checkedIn: false,
        id: null
    }

    handleOnNameChange = (e) => {
        if(e.target.value === ""){
            this.setState({
                name: "",
                score: this.state.score,
                checkedIn: this.state.checkedIn,
                id: null
            })
        }else{
        const value = this.props.all_values.find(value => value.id == e.target.value)
        this.setState({
            name: value.name,
            score: this.state.score,
            checkedIn: this.state.checkedIn,
            id: value.id
        })
    }
    }

    handleOnValueScoreChange = (e) => {
        this.setState({
            name: this.state.name,
            score: e.target.value,
            checkedIn: this.state.checkedIn,
            id: this.state.id
        })
    }
    makeOptionForEveryRemainingValue = () => {
        if(!!this.props.all_values || this.props.all_values !== []) {
            const alreadyAssociatedIds = this.props.associatedValues.map(value => value.id)
            const unassociatedValueIds = this.props.all_values.filter(value => !alreadyAssociatedIds.includes(value.id))
            return unassociatedValueIds.map(value => {
                //if the associated this associated values id matches the components value id, it will be the one selected. Otherwise it would disappear from select tag when value removed
                return <option selected={this.state.id === value.id} key={value.id} id={value.id} value={value.id}>{value.name}</option>
            })
        }
          
    }

    onSubmit = (e) => {
        if(!this.state.checkedIn && this.state.id !== null){
            this.setState({
                name: this.state.name,
                score: this.state.score,
                checkedIn: true,
                id: this.state.id
            })
            e.target.textContent = "Remove Value"
            this.props.checkIn(e, this.state.id, this.state.score)
        }else if(this.state.checkedIn)  {
            this.setState({
                name: this.state.name,
                score: this.state.score,
                checkedIn: false,
                id: this.state.id
            })
            e.target.textContent = "Add Value"
            this.props.checkOut(e, this.state.id)
        }  
    }
    //Did this so when the select is disabled on check in of associated value, it still shows your choice.
    makeDefaultValueInSelectTheComponentsCheckedInValue = () => {
        if(this.state.checkedIn){
            return this.state.name
        }else{
            return ""
        }
    }
    
    render() {
    
    return(
        <div id={this.state.id} className="container">
            <label for="values">Add a Value</label>

            <select disabled={this.state.checkedIn} onChange={(e) => this.handleOnNameChange(e)} name="values" id="values">
                <option value={null}>{this.makeDefaultValueInSelectTheComponentsCheckedInValue()}</option>
                {this.makeOptionForEveryRemainingValue()}
            </select>


            <label for="scores">Assign a score </label>

            <select disabled={this.state.checkedIn} onChange={(e) => this.handleOnValueScoreChange(e)} name="scores" id="scores">
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