import React, { Component } from 'react';

class SavedListItem extends Component {
	render() {
		return (
			<li className="list-group-item">
				<p>{this.props.date}</p>
				<h3><a href={this.props.url}>{this.props.title}</a></h3>
				<button className="btn btn-lg btn-danger" 
				onClick={this.props.handleArticleDelete}>Delete</button>				
			</li>
		);
	}
}

export default SavedListItem;