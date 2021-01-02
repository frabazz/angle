import React, { Component } from 'react'
import "./css/fraction.css"
export class Fraction extends Component {
    render() {
        if(this.props.isFraction){
            return (
            <div className="fraction">
                <span className="top">{this.props.top}</span>
                <span className="bottom">{this.props.bottom}</span>
            </div>
            );
        }
        else{
            return (
                <p>{this.props.noF}</p>
            )
        }
    }
}

export default Fraction
