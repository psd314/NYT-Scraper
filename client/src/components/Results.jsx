import React, { Component } from "react";

class Results extends Component {

	render() {
		return (
			<div className="row" style={{paddingTop: 50}}>
				<div className="col-12">
					<div className="card" >
					  <div className="card-block">
					    <div className="alert alert-info card-title" role="alert">
						  <h1>Results</h1>
						</div>
						<div>
							{this.props.children}
						</div>
					  </div>
					</div>
				</div>
			</div>			
		);
	}
}

export default Results;