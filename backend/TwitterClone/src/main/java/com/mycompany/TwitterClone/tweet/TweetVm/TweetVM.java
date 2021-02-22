package com.mycompany.TwitterClone.tweet.TweetVm;



import java.util.ArrayList;
import java.util.List;

import com.mycompany.TwitterClone.File.FileVM.FileVM;
import com.mycompany.TwitterClone.Reply.Reply;
import com.mycompany.TwitterClone.Reply.ReplyVM.ReplyVM;
import com.mycompany.TwitterClone.User.UserVM.UserVM;
import com.mycompany.TwitterClone.tweet.Tweet;
import lombok.Data;

@Data
public class TweetVM {
    private long id;
	private String content;
	private long timestamp;
	private int replies_count;
	private int tlike;
	private int reTweet;
	private UserVM user;
	private FileVM fileAttachment;
          
    public TweetVM(Tweet tweet) {
		this.setId(tweet.getId());
		this.setContent(tweet.getContent());
		this.setTimestamp(tweet.getTimestamp().getTime());
		this.setUser(new UserVM(tweet.getUser()));
		this.setTlike(tweet.getTlike());
		this.setReTweet(tweet.getReTweet());
		this.setReplies_count(tweet.getReplies_count());
		if(tweet.getFileAttachment()!=null) {
			this.fileAttachment=new FileVM(tweet.getFileAttachment());
		}
	}
	

}
