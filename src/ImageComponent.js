import React from 'react';
import { yes, no } from './objects'
import StatementComponent from './StatementComponent';

class ImageComponent extends React.Component {

	state = {
		image: no["no-image"],
		statement: no["no-statement"]
	}

	handleClick = () => {
		if (this.state.image === no["no-image"]) {
			this.setState({image: yes["yes-image"]})
			this.setState({statement: yes["yes-statement"]})
		} else {
			this.setState({image: no["no-image"]})
			this.setState({statement: no["no-statement"]})
		}
	}

	render() {
		return (
			<div>
				<StatementComponent statement={this.state.statement} key={this.state.statement} />
				<img onClick={this.handleClick} src={this.state.image} alt="yes or no"/>
			</div>
		)
	}
}

export default ImageComponent;