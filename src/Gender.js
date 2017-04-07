import React, { Component } from 'react';

class Gender extends Component {
	render() {
		const name = this.props.name;
		return (
			<div>
				<input type="radio" id={name} name="gender" value={name} />
				<label htmlFor={name}>{name}</label>
			</div>
		);
	}
}

export default Gender