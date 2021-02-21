package com.mycompany.TwitterClone.File;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.mycompany.TwitterClone.User.User;

public interface FileAttachmentRepository extends JpaRepository<FileAttachment, Long>{

	List<FileAttachment> findByDateBeforeAndTweetIsNull(Date twentyFourHoursAgo);

	List<FileAttachment> findByTweetUser(User inDB);

	
}
