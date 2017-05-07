import React, { Component } from 'react'

export default class CompleteLink extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div
        className="complete"
        onClick={this.props.completeStep}
      >
        Click to complete!
      </div>
    )
  }
}

