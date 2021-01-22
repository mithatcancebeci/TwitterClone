package com.mycompany.TwitterClone.tweet;

import java.util.Date;


import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.mycompany.TwitterClone.User.User;

import lombok.Data;
@Data
@Document(collection = "tweets")
public class Tweet {

	@Id
	private String id;
	
	@Size(min=0 ,max=300)
	private String content;
	
	private Date timestamp;
	
	@DBRef
   	private User user;
}
