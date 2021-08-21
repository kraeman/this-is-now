import React, { Component } from 'react';


class LetterAdder extends Component {

    state={
        letters: "",
        count: 0
    }

    handleChange = (e) => {
        this.setState({
            letters: e.target.value,
            count: this.state.count
        })
    }

    addToCount = (e) => {
        const length = this.state.letters.length
        this.setState({
            letters: "",
            count: this.state.count + length 
        })
    }

    render() {
        return (
            <>
                <textarea onChange={this.handleChange} value={this.state.letters}></textarea>

                <button onClick={this.addToCount}>Click Me!</button>

                {this.state.count}
            </>
        )
    }
}

export default(LetterAdder)