package com.mycompany.TwitterClone.Configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;



import lombok.Data;

@Configuration
@Data
@ConfigurationProperties(prefix = "tweet")
public class AppConfiguration {
 String uploadPath;
 String profileStorage="profile";
 String bgStorage="backgroundImage";
 String attachmentStorage="attachments";
 public String getProfileStorage() {
	 return uploadPath+"/"+ profileStorage;
 }
 public String getAttachmentStorage() {
	 return uploadPath+"/"+attachmentStorage;
 }
 public String getBgStorage() {
	 return uploadPath+"/"+bgStorage;
	 
 }
}