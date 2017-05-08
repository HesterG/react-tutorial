import React, { Component } from 'react'

export default class Step extends Component {
  render() {
    let stepNumber = this.props.stepNumber
    return (
      <span className="step" onClick={this.props.increaseStep}>
        Step {stepNumber}&nbsp;
      </span>
    )
  }
}
