package com.mycompany.TwitterClone.Message;

import java.security.Principal;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {
   
	
	private static final Logger log = LoggerFactory.getLogger(MessageController.class);

	@Autowired
    MessageRepository messageRepository;
	@Autowired
	SimpMessagingTemplate messageTemplate;
	@MessageMapping("/messages")
	public void sendSpecific(
			  @Payload Message msg
						  ) throws Exception { 
			    MessageVM out = new MessageVM(
			      msg.getSenderName(), 
			      msg.getText(),
			      new SimpleDateFormat("HH:mm").format(new Date())); 
			     messageTemplate.convertAndSendToUser(
			      msg.getRecipientName(), "/queue/user", out);
			     messageRepository.save(msg);
	log.info(msg.getRecipientName()+msg.getSenderName()+msg.getText());
	log.info(out.getSenderName()+out.getText());
	}
	

	
}
