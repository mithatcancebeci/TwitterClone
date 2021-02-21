package com.mycompany.TwitterClone.tweet;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycompany.TwitterClone.User.User;

@Service
public class TweetSecurity {
   
	@Autowired
	TweetRepository tweetRepository;
	
	public boolean isAllowedToDelete(User LoggedInUser,long id) {
      Optional<Tweet> optionalTweet=tweetRepository.findById(id);
      if(!optionalTweet.isPresent()) {
    	  return false;
      }
      Tweet tweet=optionalTweet.get();
      if(tweet.getUser().getId()!=LoggedInUser.getId()) {
    	  return false;
    			 
      }
      return true;
	
	}
	
}
