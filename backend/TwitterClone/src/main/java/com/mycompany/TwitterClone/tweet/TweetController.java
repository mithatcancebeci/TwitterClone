package com.mycompany.TwitterClone.tweet;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.TwitterClone.User.User;
import com.mycompany.TwitterClone.tweet.TweetVm.TweetSubmitVM;
import com.mycompany.TwitterClone.tweet.TweetVm.TweetVM;

import shared.CurrentUser;

@RestController
public class TweetController {

	@Autowired
	TweetService tweetService;
	
	@PostMapping("/api/1.0/addTweet")
	public ResponseEntity<?> createTweet(@Valid @RequestBody TweetSubmitVM tweetSubmitVM,@CurrentUser User user){
		tweetService.save(tweetSubmitVM,user);
		return ResponseEntity.ok("tweet created");
	}
	
}
