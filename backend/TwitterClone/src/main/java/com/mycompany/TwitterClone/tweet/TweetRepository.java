package com.mycompany.TwitterClone.tweet;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mycompany.TwitterClone.User.User;
import com.mycompany.TwitterClone.tweet.TweetVm.TweetVM;

public interface TweetRepository extends MongoRepository<Tweet, String>{

	

	
}
