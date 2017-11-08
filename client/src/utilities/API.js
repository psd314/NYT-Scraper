import axios from "axios";

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey; 

export default {

  scrapeArticles: (params) => {
  	const queryURL = queryURLBase + `&q=${params.topic}` +
  		`& begin_date=${params.beginningYear}0101&end_date=${params.endingYear}1231`;

    return axios.get(queryURL);
  },
};

