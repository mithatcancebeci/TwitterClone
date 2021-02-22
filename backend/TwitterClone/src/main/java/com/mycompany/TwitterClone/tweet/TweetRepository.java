package com.mycompany.TwitterClone.tweet;


import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mycompany.TwitterClone.User.User;
import com.mycompany.TwitterClone.tweet.TweetVm.TweetUpdateVM;
import com.mycompany.TwitterClone.tweet.TweetVm.TweetVM;






public interface TweetRepository extends JpaRepository<Tweet, Long>,JpaSpecificationExecutor<Tweet>{

	Page<Tweet> findByUser(User user, Pageable page);

	
	



	
    


	

	
}
