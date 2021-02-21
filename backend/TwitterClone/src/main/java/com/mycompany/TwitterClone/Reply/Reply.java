package com.mycompany.TwitterClone.Reply;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mycompany.TwitterClone.File.FileAttachment;
import com.mycompany.TwitterClone.User.User;
import com.mycompany.TwitterClone.tweet.Tweet;

import lombok.Data;

@Entity
@Data
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    private String text;
    private int repliesCount;
    private int reTweetCount;
    private int likeCount;
    @ManyToOne
    private User user;
    @JsonIgnore
    @ManyToOne
    private Tweet tweet;
    @OneToOne(mappedBy="reply",cascade = CascadeType.REMOVE)
    private FileAttachment  fileAttachment;
}
