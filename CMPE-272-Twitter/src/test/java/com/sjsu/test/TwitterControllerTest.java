package com.sjsu.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.social.twitter.api.impl.TwitterTemplate;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.sjsu.TwitterDemoOperations;

/**
 * Test class for TwitterDemoOperations.java
 *
 * @author Mamatha Guntu, Srujana Koripalli
 * 
 */

@RunWith(SpringJUnit4ClassRunner.class)
public class TwitterControllerTest {

	private TwitterDemoOperations twitterDemo;

	@Value("${twitter.apikey}")
	private String apiKey;

	@Value("${twitter.apikeysecret}")
	private String apiKeySecret;

	@Value("${twitter.tokeykey}")
	private String tokeyKey;

	@Value("${twitter.tokenkeysecret}")
	private String tokenKeySecret;

	@Test
	public void testTwitterTemplate() {
		TwitterTemplate twitterTemplate = new TwitterTemplate(apiKey, apiKeySecret, tokeyKey, tokenKeySecret);
		assertNotNull(twitterTemplate);
	}

	@Test
	public void testGetTweetByWrongID() {
		twitterDemo = new TwitterDemoOperations();
		String message = twitterDemo.getTweetByID(100083773737l);
		assertEquals("No Tweet", "No tweet is available with this Id", message);
	}

	@Test
	public void testDeleteTweeteByID() {
		twitterDemo = new TwitterDemoOperations();
		String message = twitterDemo.deleteTweet(1312208800657534976l);
		assertNotEquals("Tweet Deleted", message);
	}

}
