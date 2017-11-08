import React, { Component } from "react";


class Navbar extends Component {

	render() {
		return (
			<div className="jumbotron" style={{backgroundColor: "#20315A", color: "white"}}>
      <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times React</strong></h1>
    </div>
		);
	}
}

export default Navbar;