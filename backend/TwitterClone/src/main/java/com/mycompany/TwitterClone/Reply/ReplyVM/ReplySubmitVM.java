package com.mycompany.TwitterClone.Reply.ReplyVM;

import javax.validation.constraints.Size;

import lombok.Data;
@Data
public class ReplySubmitVM {
	@Size(min=1 ,max=1000)
	private String text;
	private long attachmentId;
}
