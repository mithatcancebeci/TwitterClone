package com.mycompany.TwitterClone.tweet.TweetVm;

import java.util.Date;

import com.mycompany.TwitterClone.User.UserVM.UserVM;
import com.mycompany.TwitterClone.tweet.Tweet;

import lombok.Data;

@Data
public class TweetVM {
    private String id;
	private String content;
	private long timestamp;
	private UserVM userVM;
	public TweetVM(Tweet tweet) {
		
		this.setId(tweet.getId());;
		this.setContent(tweet.getContent());
		this.setTimestamp(tweet.getTimestamp().getTime());
		this.setUserVM(new UserVM(tweet.getUser()));
	}
	

}
