import axios from 'axios';

/**
* This class holds all the required URLs to gain access to the twitter API.
*
* @author Mamatha Guntu, Umashankar Kumar
* @author Prajakta Joshi, Srujana Koripalli
* 
*/
const TWITTER_URL = "http://localhost:8080";

class TweetService {
    tweet(data) {
        return axios.post(TWITTER_URL + "/twitter/postNewTweet", data);
    }
    
    retrieveTweet(id) {
		return axios.get(TWITTER_URL + "/twitter/getTweet/" + id).then(response => response.data);
	}
    
    deleteTweetByMessageID(id) {
        return axios.delete(TWITTER_URL + "/twitter/deleteTweet/" + id).then(response => response.data);      
    }
}

export default TweetService;
