package com.mycompany.TwitterClone;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.mycompany.TwitterClone.User.User;
import com.mycompany.TwitterClone.User.UserRepository;
import com.mycompany.TwitterClone.User.UserService;




@SpringBootApplication(exclude=SecurityAutoConfiguration.class)
@EnableMongoRepositories(basePackageClasses = UserRepository.class)
public class TwitterCloneApplication {

	public static void main(String[] args) {
		SpringApplication.run(TwitterCloneApplication.class, args);}
	
	
		

}
