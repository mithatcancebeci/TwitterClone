package com.mycompany.TwitterClone.Reply;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mycompany.TwitterClone.User.User;
import com.mycompany.TwitterClone.tweet.Tweet;


public interface ReplyRepository extends JpaRepository<Reply,Long>{

	Page<Reply> findByUser(User user, Pageable page);

	Page<Reply> findByTweet(Tweet tweet, Pageable page);

}
