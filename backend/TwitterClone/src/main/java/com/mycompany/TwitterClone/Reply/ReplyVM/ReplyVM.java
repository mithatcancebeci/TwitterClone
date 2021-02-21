package com.mycompany.TwitterClone.Reply.ReplyVM;

import java.util.List;

import com.mycompany.TwitterClone.FileVM.FileVM;
import com.mycompany.TwitterClone.Reply.Reply;
import com.mycompany.TwitterClone.User.UserVM.UserVM;
import com.mycompany.TwitterClone.tweet.TweetVm.TweetVM;

import lombok.Data;

@Data
public class ReplyVM {
private long id;
private String text;
private UserVM user;
private TweetVM tweet;
private FileVM fileVM;

public ReplyVM(Reply reply)
{   this.setId(reply.getId());
	this.setText(reply.getText());
	this.setUser(new UserVM(reply.getUser()));
	this.setTweet(new TweetVM(reply.getTweet()));
	if(reply.getFileAttachment()!=null) {
		this.fileVM=new FileVM(reply.getFileAttachment());
	}
	
	
	}
}
