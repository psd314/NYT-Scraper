import React, { Component } from 'react';

class QueryList	 extends Component {
	render() {
		return (
			<ul className="list-group">{this.props.children}</ul>
		);
	}
}

export default QueryList;




