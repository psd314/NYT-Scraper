import React, { Component } from "react";

class Search extends Component {	

	render() {
		return(
			<div className="row">
				<div className="col-12">
					<div className="card">
					  <div className="card-block">
					    <div className="alert alert-info card-title" role="alert">
						  <h1>Search Articles</h1>
						</div>
					    <div style={{ paddingBottom: 30}}>
						    <div className="row">
						    	<div className="col-12">
						    		<h3>Topic</h3>
						    	</div>
						    </div>
						    <div className="row">
						    	<div className="col-10 offset-1">
						    		<div className="input-group">
									  <input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" 
									  	value={this.props.value}
									  	onChange={this.props.handleInputChange}					
									  	name="topic"/>
									</div>
						    	</div>
						    </div>
					    </div>

					    <div style={{ paddingBottom: 30}}>
						    <div className="row">
						    	<div className="col-12">
						    		<h3>Beginning Year</h3>
						    	</div>
						    </div>
						    <div className="row">
						    	<div className="col-10 offset-1">
						    		<div className="input-group">
									  	<input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" 
									  	value={this.props.value}
									  	onChange={this.props.handleInputChange}					
									  	name="beginningYear"/>
									</div>
						    	</div>
						    </div>
					    </div>

					    <div style={{ paddingBottom: 30}}>
						    <div className="row">
						    	<div className="col-12">
						    		<h3>Ending Year</h3>
						    	</div>
						    </div>
						    <div className="row">
						    	<div className="col-10 offset-1">
						    		<div className="input-group">
									  	<input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" 
										value={this.props.value}
										onChange={this.props.handleInputChange}
									  	name="endingYear"/>
									</div>
						    	</div>
						    </div>
					    </div>
					    <div style={{paddingBottom: 20}}>
					    	<button onClick={this.props.handleFormSubmit} href="#" className="btn btn-lg btn-primary">Search</button>
					    </div>
					  </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;