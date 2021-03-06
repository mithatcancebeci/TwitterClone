package com.mycompany.TwitterClone.User.UserVM;


import com.mycompany.TwitterClone.User.User;

import lombok.Data;

@Data
public class UserVM {
	private String username;
	private String displayName;
	private String image;
    private String description;
    private String bgimage;

public UserVM(User user) {
this.setUsername(user.getUsername());
this.setDisplayName(user.getDisplayName());
this.setImage(user.getImage());
this.setDescription(user.getDescription());
this.setBgimage(user.getBgimage());
}
}