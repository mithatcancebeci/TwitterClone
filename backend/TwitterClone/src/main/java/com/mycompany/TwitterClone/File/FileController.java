package com.mycompany.TwitterClone.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class FileController {

	@Autowired
	FileService fileService;
	@PostMapping("/api/1.0/tweet-attachments")
	FileAttachment saveTweetAttachments(MultipartFile file)
	{
		return fileService.saveTweetAttachment(file);
		
	}
	@PostMapping("/api/1.0/reply-attachments")
	FileAttachment saveReplyAttachments(MultipartFile file)
	{
		return fileService.saveTweetAttachment(file);
		
	}
}
