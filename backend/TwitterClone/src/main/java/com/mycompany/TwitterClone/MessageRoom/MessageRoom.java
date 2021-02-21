package com.mycompany.TwitterClone.MessageRoom;

import javax.persistence.Entity;

import lombok.Data;

@Data
@Entity
public class MessageRoom {
 private long id;
 private String roomName;
 
}
