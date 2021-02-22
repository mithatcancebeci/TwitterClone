package com.mycompany.TwitterClone.User;




import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.mycompany.TwitterClone.User.UserVM.UserUpdateVM;
import com.mycompany.TwitterClone.User.UserVM.UserVM;


import shared.CurrentUser;
import shared.GenericResponse;

@RestController
public class UserController {

	@Autowired
	UserService userService;
	
	@PostMapping("/api/1.0/addUser")
	public GenericResponse addUser(@Valid  @RequestBody User user){
			    userService.save(user);		
			    return new GenericResponse("User Created");
		
	}
	@GetMapping("/api/1.0/getUsers")
	Page<UserVM> getUsers (Pageable page,@CurrentUser User user){
		
	return userService.getUsers(page,user).map(UserVM::new);	
		
	}
     
	@GetMapping("/api/1.0/user/{username}")
	UserVM getUser(@PathVariable String username){
		User user=userService.getByUsername(username);
		return new UserVM(user);
	}

	
	@PutMapping("/api/1.0/user/{username}")
	@PreAuthorize("principal.username==#username")
	UserVM updateUser(@Valid @RequestBody UserUpdateVM updated,@PathVariable String username) {
	     User user=	userService.updatedUser(updated,username);
		return new UserVM(user);
	}
}
