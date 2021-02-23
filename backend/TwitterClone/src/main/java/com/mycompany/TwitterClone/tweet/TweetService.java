package com.mycompany.TwitterClone.tweet;

import java.util.Date;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.mycompany.TwitterClone.Error.NotFoundException;
import com.mycompany.TwitterClone.File.FileAttachment;
import com.mycompany.TwitterClone.File.FileAttachmentRepository;
import com.mycompany.TwitterClone.User.User;
import com.mycompany.TwitterClone.User.UserRepository;
import com.mycompany.TwitterClone.User.UserService;
import com.mycompany.TwitterClone.tweet.TweetVm.TweetSubmitVM;
import com.mycompany.TwitterClone.tweet.TweetVm.TweetUpdateVM;


@Service
public class TweetService {

	@Autowired
	TweetRepository tweetRepository;
	@Autowired
	FileAttachmentRepository fileRepository;
	@Autowired
	UserRepository userRepository;
    @Autowired
    UserService userService;
	public void save(TweetSubmitVM tweetSubmitVM, User user) {
		Tweet tweet = new Tweet();
		tweet.setContent(tweetSubmitVM.getContent());
		tweet.setTimestamp(new Date());
		tweet.setUser(user);
		tweetRepository.save(tweet);
		Optional<FileAttachment> optionalFileAttachment = fileRepository.findById(tweetSubmitVM.getAttachmentId());
		if (optionalFileAttachment.isPresent()) {
			FileAttachment fileAttachment = optionalFileAttachment.get();
			fileAttachment.setTweet(tweet);
			fileRepository.save(fileAttachment);
		}

	}

	public Tweet getById(long id) {
		Optional<Tweet> inDB=tweetRepository.findById(id);
		Tweet tweet=inDB.get();
        if(tweet==null) {
        	throw new NotFoundException();
        }
        	return tweet;
        
        
	}
	public Page<Tweet> getTweets(Pageable page) {
        
		return tweetRepository.findAll(page);
	}



	public Tweet updateLike(TweetUpdateVM tweetUpVM, long id,User user) {
		Optional<Tweet> inDB = tweetRepository.findById(id);
		Tweet tweet=inDB.get();
		if(tweetUpVM.getReTweet()==1 ) {
		tweet.setReTweet(inDB.get().getReTweet()+tweetUpVM.getReTweet());
	    }
	    if(tweetUpVM.getTlike()==1) {
		tweet.setTlike(inDB.get().getTlike()+tweetUpVM.getTlike());
	    }
	   	return tweetRepository.save(tweet);
	}

	public Tweet getComment(long id) {
			return 	tweetRepository.getOne(id);
	}

	public Page<Tweet> getTweetsOfUser(String username, Pageable page) {
		User inDB=userService.getByUsername(username);
	
		return tweetRepository.findByUser(inDB,page);
	}

	public Tweet oneTweet(long id) {
		Optional<Tweet> inDB=tweetRepository.findById(id);
		Tweet tweet=inDB.get();
		return tweetRepository.getOne(tweet.getId());
	}

	

	



}
