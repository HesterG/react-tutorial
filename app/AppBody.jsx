import React, { Component } from 'react'
import Completed from './Completed'
import Step from './Step'

export default class AppBody extends Component {
	render() {
		return (
			<div className="step">
				<Step/>
				<Completed/>
			</div>
		)
	}
}
