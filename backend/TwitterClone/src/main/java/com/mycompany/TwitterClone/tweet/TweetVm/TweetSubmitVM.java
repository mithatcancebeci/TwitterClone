package com.mycompany.TwitterClone.tweet.TweetVm;

import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class TweetSubmitVM {
	@Size(min=1 ,max=1000)
	private String content;
	private long attachmentId;
}
