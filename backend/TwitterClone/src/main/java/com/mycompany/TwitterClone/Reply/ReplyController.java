package com.mycompany.TwitterClone.Reply;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.TwitterClone.Reply.ReplyVM.ReplySubmitVM;
import com.mycompany.TwitterClone.Reply.ReplyVM.ReplyVM;
import com.mycompany.TwitterClone.User.User;
import com.mycompany.TwitterClone.tweet.Tweet;

import shared.CurrentUser;
import shared.GenericResponse;

@RestController
public class ReplyController {

	@Autowired
	ReplyService replyService;
	
	@PostMapping("/api/1.0/postReply/{id:[0-9]+}")
	public GenericResponse postReply(@PathVariable long id,@RequestBody ReplySubmitVM replySubmit , @CurrentUser User user){
		replyService.createReply(replySubmit,user,id);
		return new GenericResponse("New Reply ");
				}
	@GetMapping("/api/1.0/user/{username}/replies")
	Page<ReplyVM> userOfReplies(@PathVariable String username,@PageableDefault(sort = "id",direction = Direction.DESC)Pageable page)
	{
		return replyService.getUserOfReplies(username,page).map(ReplyVM::new);
	}
	
   @GetMapping("/api/1.0/reply/{id:[0-9]+")
   ReplyVM getOneReply(@PathVariable long id) {

 Reply reply=replyService.getOneReply(id);
 return new ReplyVM(reply);
   }
   @GetMapping("/api/1.0/replies/{id:[0-9]+}")
   Page<ReplyVM> tweetsofReplies(@PathVariable long id,Pageable page){
	   return replyService.getTweetsOfReplies(id,page).map(ReplyVM::new);
   }
}
