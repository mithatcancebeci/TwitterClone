package com.mycompany.TwitterClone;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import com.mycompany.TwitterClone.User.User;
import com.mycompany.TwitterClone.User.UserService;
import com.mycompany.TwitterClone.tweet.TweetService;
import com.mycompany.TwitterClone.tweet.TweetVm.TweetSubmitVM;

@SpringBootApplication
public class TwitterCloneApplication {

	public static void main(String[] args) {
		SpringApplication.run(TwitterCloneApplication.class, args);
	}

	@Bean
	@Profile("dev")
	CommandLineRunner createInitialUsers(UserService userService, TweetService tweetService) {
		return (args) -> {
			for (int i = 1; i <= 4; i++) {
				User user = new User();
				user.setUsername("user" + i);
				user.setDisplayName("display" + i);
				user.setPassword("password");
				userService.save(user);
				for (int j = 1; j <= 3; j++) {
					TweetSubmitVM tweet = new TweetSubmitVM();
					tweet.setContent("tweet - (" + j + ") from user(" + i + ")");
					tweetService.save(tweet, user);
				}
			}

		};
	}
}