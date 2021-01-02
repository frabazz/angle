import React, { Component } from 'react'
import "./css/container.css"
export class LeftContainer extends Component {
    render() {
        return (
            <div className="left__container">
                {this.props.children}
            </div>
        )
    }
}

export default LeftContainer
