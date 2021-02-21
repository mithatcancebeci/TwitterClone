package com.mycompany.TwitterClone.Message;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Message {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String senderName;
	private String recipientName;
	private String text;
}
