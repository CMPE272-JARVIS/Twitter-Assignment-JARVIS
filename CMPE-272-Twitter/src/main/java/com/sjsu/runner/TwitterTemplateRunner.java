package com.sjsu.runner;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.social.twitter.api.Twitter;
import org.springframework.social.twitter.api.impl.TwitterTemplate;
import org.springframework.stereotype.Component;

/**
* Creates TwitterTemplate to establish connection between Spring boot and Twitter application.
* @author Umashankar Kumar
* 
*/
@Component
public class TwitterTemplateRunner implements ApplicationRunner{
	
	private TwitterTemplate twitterTemplate;
	
	@Value("${twitter.apikey}")
	private String apiKey;
	
	@Value("${twitter.apikeysecret}")
	private String apiKeySecret;
	
	@Value("${twitter.tokeykey}")
	private String tokeyKey;
	
	@Value("${twitter.tokenkeysecret}")
	private String tokenKeySecret;

	@Override
	public void run(ApplicationArguments args) throws Exception {
		twitterTemplate = new TwitterTemplate(apiKey,apiKeySecret,tokeyKey,tokenKeySecret);
		System.out.println("TwiiterTemplate value is "+ twitterTemplate );
	}
	
	public TwitterTemplate connection() {
		return twitterTemplate;
	}

}
