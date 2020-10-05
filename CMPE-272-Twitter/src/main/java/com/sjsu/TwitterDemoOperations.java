package com.sjsu;

import java.util.List;

/**
* Rest API to create, delete, retrieve tweets.
*
* @author Umashankar Kumar, Prajakta Joshi
* 
*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.twitter.api.Tweet;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sjsu.entity.TwitterFields;
import com.sjsu.runner.TwitterTemplateRunner;

@RestController
@RequestMapping(value = "/twitter")
@CrossOrigin(origins="http://localhost:3000")
public class TwitterDemoOperations {

	@Autowired
	TwitterTemplateRunner twitterTemplate;

	/* 
	 * This method gives back all tweets for provided username.
	 * For example, input - realDonaldTrump
	 * 				output-Tweets tweeted by Donald trump 
	 */
	@RequestMapping(value = "/getTweets/{userName}", produces = "application/json")
	public List<Tweet> getTweets(@PathVariable("userName") String userName) {
		if (null != userName) {
			List<Tweet> listOfTweets = twitterTemplate.connection().timelineOperations().getUserTimeline(userName);
			return listOfTweets;
		}
		return null;
	}

	/*
	 * Returns the Tweet message, provide Id as input 
	 */
	@RequestMapping(value = "getTweet/{id}", method = RequestMethod.GET)
	public String getTweetByID(@PathVariable Long id) {
		Tweet post;
		try {
			post = twitterTemplate.connection().timelineOperations().getStatus(id);
		} catch (Exception e) {
			return "No tweet is available with this Id";
		}

		return "Tweeted message is : " + post.getText();
	}
	
	/*
	 * Returns the whole tweet of that Id
	 */
	@RequestMapping(value = "getWholeTweet/{id}", method = RequestMethod.GET)
	public Tweet getWholeTweetByID(@PathVariable Long id) {
		Tweet post = twitterTemplate.connection().timelineOperations().getStatus(id);
		return post;
	}
	

	/*
	 * Post a tweet in the timeline.
	 */
	@RequestMapping(value = "/postNewTweet", method = RequestMethod.POST)
	public String postTweet(@RequestBody TwitterFields fields) {
		Tweet tweetedValue = twitterTemplate.connection().timelineOperations().updateStatus(fields.getMessageToPost());
		String id = null;
		if (null != tweetedValue) {
			 id = String.valueOf(tweetedValue.getId());
		}
		return "Tweet is sucessfully posted, Id is " + id ;
	}

	/*
	 * Delete a posted tweet, provide Id as input
	 */
	@RequestMapping(value = "deleteTweet/{id}", method = RequestMethod.DELETE)
	public String deleteTweet(@PathVariable Long id) {
		try {
			twitterTemplate.connection().timelineOperations().deleteStatus(id);
		} catch (Exception e) {
			return e.getMessage();
		}
		return "Tweet is deleted for Id - " +id;
	}

}
