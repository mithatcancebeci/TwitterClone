package com.mycompany.TwitterClone.tweet.TweetVm;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class TweetUpdateVM {
    private String content;
	private int tlike;
	private int reTweet;
	
}
