package com.mycompany.TwitterClone.File;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.mycompany.TwitterClone.Reply.Reply;
import com.mycompany.TwitterClone.tweet.Tweet;



import lombok.Data;
@Data
@Entity
public class FileAttachment {
 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;
	   @Temporal(TemporalType.TIMESTAMP)
	private Date date;
	private String fileType;
	@OneToOne
	private Tweet tweet;
	@OneToOne
	private Reply reply;
}
