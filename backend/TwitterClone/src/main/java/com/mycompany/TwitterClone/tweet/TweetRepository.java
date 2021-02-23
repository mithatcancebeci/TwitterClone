package com.mycompany.TwitterClone.tweet;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import com.mycompany.TwitterClone.User.User;

public interface TweetRepository extends JpaRepository<Tweet, Long>, JpaSpecificationExecutor<Tweet> {

	Page<Tweet> findByUser(User user, Pageable page);

}
