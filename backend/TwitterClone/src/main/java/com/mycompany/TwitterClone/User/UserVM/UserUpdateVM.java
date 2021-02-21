package com.mycompany.TwitterClone.User.UserVM;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;
import shared.FileType;

@Data
public class UserUpdateVM {
	@NotNull(message = "DisplayName must not be null")
	@Size(min = 4, max = 30)	
	String displayName;
	@FileType(types = {"png","jpeg"})
	private String image;
	@Size(min=1,max=50)
	private String description;
	private String bgimage;
	
}
