package com.mycompany.TwitterClone.Reply;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;
import com.mycompany.TwitterClone.File.FileAttachment;
import com.mycompany.TwitterClone.File.FileAttachmentRepository;
import com.mycompany.TwitterClone.Reply.ReplyVM.ReplySubmitVM;
import com.mycompany.TwitterClone.Reply.ReplyVM.ReplyVM;
import com.mycompany.TwitterClone.User.User;
import com.mycompany.TwitterClone.User.UserRepository;
import com.mycompany.TwitterClone.User.UserService;
import com.mycompany.TwitterClone.tweet.Tweet;
import com.mycompany.TwitterClone.tweet.TweetRepository;
import com.mycompany.TwitterClone.tweet.TweetService;

@Service
public class ReplyService {
	@Autowired
	FileAttachmentRepository fileRepository;
	@Autowired
	ReplyRepository replyRepository;
	@Autowired
	TweetRepository tweetRepository;
	@Autowired
	UserService userService;
	@Autowired
	TweetService tweetService;

	public void createReply(ReplySubmitVM replySubmit, User user, long id) {
		Reply reply = new Reply();
		reply.setText(replySubmit.getText());
		Optional<Tweet> inDB = tweetRepository.findById(id);
		Tweet tweet = inDB.get();
		reply.setUser(user);
		reply.setTweet(tweet);
		tweet.setReplies_count(tweet.getReplies_count()+1);
		replyRepository.save(reply);
		Optional<FileAttachment> optionalFileAttachment = fileRepository.findById(replySubmit.getAttachmentId());
		if (optionalFileAttachment.isPresent()) {
			FileAttachment fileAttachment = optionalFileAttachment.get();
			fileAttachment.setTweet(tweet);
			fileAttachment.setReply(reply);
			fileRepository.save(fileAttachment);
		}

	}

	public Page<Reply> getUserOfReplies(String username, Pageable page) {
	      User inDB=userService.getByUsername(username);
	 		return replyRepository.findByUser(inDB,page);
	}

	public Reply getOneReply(long id) {
		Optional<Reply> inDB=replyRepository.findById(id);
		Reply reply=inDB.get();
		return replyRepository.getOne(reply.getId());
	}

	public Page<Reply> getTweetsOfReplies(long id, Pageable page) {
		Tweet inDB=tweetService.getById(id);
		
		return replyRepository.findByTweet(inDB,page);
	}

	
	
}
