package com.mycompany.TwitterClone.tweet;

import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import com.mycompany.TwitterClone.File.FileAttachment;
import com.mycompany.TwitterClone.Reply.Reply;
import com.mycompany.TwitterClone.User.User;


import lombok.Data;
@Data
@Entity
public class Tweet {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
    
	@Size(min=0 ,max=300)
	@Column(length=1000)
	@NotEmpty(message = "Tweet must not be null")
	private String content;
	
	private Date timestamp;
	
	@OneToMany(mappedBy="tweet",cascade=CascadeType.REMOVE)
	private List<Reply> replies;
	private int replies_count;
	private int reTweet;
	private int tlike;
	
	@ManyToOne
   	private User user;
	@OneToOne(mappedBy="tweet",cascade = CascadeType.REMOVE)
    private FileAttachment fileAttachment;
}
