package com.sjsu.entity;
/**
* This class acts like a Bootstrap for the Spring boot application.
*
* @author Prajakta Joshi
* 
*/
public class TwitterFields {

	private String messageToPost;

	private Long id;

	public TwitterFields() {
		// TODO Auto-generated constructor stub
	}

	public TwitterFields(String messageToPost, Long id) {
		super();
		this.messageToPost = messageToPost;
		this.id = id;
	}

	public String getMessageToPost() {
		return messageToPost;
	}

	public void setMessageToPost(String messageToPost) {
		this.messageToPost = messageToPost;
	}

	public long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "TwitterFields [messageToPost=" + messageToPost + ", id=" + id + "]";
	}

}
