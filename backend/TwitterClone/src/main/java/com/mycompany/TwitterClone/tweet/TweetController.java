package com.mycompany.TwitterClone.tweet;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	public ResponseEntity<?> createTweet(@Valid @RequestBody TweetSubmitVM tweetSubmitVM, @CurrentUser User user) {
		tweetService.save(tweetSubmitVM, user);
		return ResponseEntity.ok("tweet created");
	}

	@GetMapping("/api/1.0/user/{username}/tweets")
	Page<TweetVM> getUserTweets(@PathVariable String username,
			@PageableDefault(sort = "id", direction = Direction.DESC) Pageable page) {
		return tweetService.getTweetsOfUser(username, page).map(TweetVM::new);
	}

	@GetMapping("/api/1.0/tweets")
	Page<TweetVM> getTweet(@PageableDefault(sort = "id", direction = Direction.DESC) Pageable page) {
		return tweetService.getTweets(page).map(TweetVM::new);

	}

	@GetMapping("/api/1.0/tweet/{id:[0-9]+}")
	TweetVM getOneTweet(@PathVariable long id) {
		Tweet tweet = tweetService.oneTweet(id);
		return new TweetVM(tweet);
	}
}
