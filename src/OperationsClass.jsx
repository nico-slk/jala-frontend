import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class OperationsClass extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.handleChange.bind(this)
        this.sum.bind(this)
        this.rest.bind(this)
        this.mult.bind(this)
        this.div.bind(this)
        this.reset.bind(this)
    }

    handleChange = e => {
        this.setState({ value: parseInt(e.target.value) });
    }

    sum = () => {
        this.setState({ value: this.state.value + 1 });
    }
    rest = () => {
        this.setState({ value: this.state.value - 1 });
    }
    mult = () => {
        this.setState({ value: this.state.value * 2 });
    }
    div = () => {
        this.setState({ value: this.state.value / 2 });
    }
    reset = () => {
        this.setState({ value: 0 });
    }

    render() {
        return (
            <div>
                <Link to="/" className="btn btn-warning" >Back</Link>
                <input type="number" name="num" className='' onChange={this.handleChange} />
                <input type="button" value="+1" onClick={this.sum} />
                <input type="button" value="-1" onClick={this.rest} />
                <input type="button" value="×2" onClick={this.mult} />
                <input type="button" value="÷2" onClick={this.div} />
                <input type="button" value="reset" onClick={this.reset} />
                <h1>{this.state.value}</h1>
            </div>
        )
    }
}
