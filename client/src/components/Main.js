import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Search from "./Search.jsx";
import Results from "./Results.jsx";
import Saved from "./Saved.jsx";
import SavedListItem from "./SavedListItem.jsx";
import API from "../utilities/API.js";
import QueryList from "./QueryList.jsx";
import QueryListItem from "./QueryListItem.jsx";
import axios from 'axios';

class Main extends Component {
	state = {
		results: [],
		savedArticles: [],
		topic: "",
		beginningYear: "",
		endingYear: ""
	}

	componentDidMount() {
    	this.retrieveSavedArticles();
  	} 

  	retrieveSavedArticles = () => {
  		axios
  			.get('api/retrieve')
  			.then((res) => this.setState({savedArticles: res.data}))
  			.catch((err) => console.error(err));  			
  	}

	searchNyt = (query) => {
	    API.scrapeArticles(query)
	      .then(res => this.setState({ results: res.data.response.docs })) 
	      .catch(err => console.log(err)); 
	  };

	handleInputChange = (event) => {
	    const value = event.target.value;
	    const name = event.target.name;
	    this.setState({
	      [name]: value
	    });
  };

	handleFormSubmit = (event) => {
		event.preventDefault();
		this.searchNyt(this.state);
	}

	handleArticleSave = (articleInfo) => {

		axios
			.post('/api/saveArticles', {url: articleInfo.web_url, articleDate: articleInfo.pub_date, title: articleInfo.headline.main})
			.then(res => {
					const temp = this.state.results.filter(result => {
						return result.web_url !== articleInfo.web_url;
					});
					this.setState({results: temp});
					this.retrieveSavedArticles();
				})
			.catch(err => console.log(err));
	}

	handleArticleDelete = (articleInfo) => {

		axios
			.delete('/api/deleteArticle/'+ articleInfo._id)
			.then(res => {
				const temp = this.state.savedArticles.filter(result => {
						return result.web_url !== articleInfo.web_url;
					});
					this.setState({savedArticles: temp});
					this.retrieveSavedArticles();
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="container">
				<Navbar />
				<Search 
					handleFormSubmit={this.handleFormSubmit}
					handleInputChange={this.handleInputChange}
				/>
				<Results>
					{!this.state.results.length ? (<h3>No results</h3>) : 
					(<QueryList>
						{this.state.results.map( (result, index) => {
								return (
									<QueryListItem 
										key={result._id}
										title={result.headline.main}
										date={result.pub_date}
										url={result.web_url}
										handleArticleSave={() => this.handleArticleSave(result)}
										// () => changes scope so you have access to result variable
									/>
									);
								})
							}
					</QueryList>)}
				</Results>
				<Saved>
					{!this.state.savedArticles.length ? (<h3>No saved articles at this time</h3>):
						(<QueryList>
						{this.state.savedArticles.map( (result, index) => {
								return (
									<SavedListItem 
										key={result.title}
										title={result.title}
										date={result.articleDate}
										url={result.url}
										handleArticleDelete={() => this.handleArticleDelete(result)}
										// () => changes scope so you have access to result variable
									/>
									);
								})
							}
					</QueryList>)}
				</Saved>
			</div>
		);
	}
}

export default Main;