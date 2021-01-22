package com.mycompany.TwitterClone.tweet;

import java.util.Date;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycompany.TwitterClone.User.User;
import com.mycompany.TwitterClone.tweet.TweetVm.TweetSubmitVM;
import com.mycompany.TwitterClone.tweet.TweetVm.TweetVM;


@Service
public class TweetService {

	@Autowired
	TweetRepository tweetRepository;
	

	
	
	public void save(TweetSubmitVM tweetSubmitVM, User user) {
		Tweet tweet=new Tweet();
		tweet.setContent(tweetSubmitVM.getContent());
		tweet.setTimestamp(new Date());
		tweet.setUser(user);
		tweetRepository.save(tweet);
		
	}

	
	
}
