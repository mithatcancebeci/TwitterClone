package com.mycompany.TwitterClone.User;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.TwitterClone.Error.ApiError;

import shared.GenericResponse;

@RestController
public class UserController {

	@Autowired
	UserService userService;
	
	@PostMapping("/api/1.0/addUser")
	public ResponseEntity<?> addUser(@RequestBody User user){
		String username=user.getUsername();
		if(username==null||username.isEmpty()) {
			ApiError apiError=new ApiError(400,"Validation Error","/api/1.0/addUser");
			Map<String,String> validationErrors=new HashMap<>();
			validationErrors.put("username","Username cannot be null");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(validationErrors);
		}
	    userService.save(user);
		return  ResponseEntity.ok(new GenericResponse("User Created"));
		
	}
	@GetMapping("/api/1.0/getUsers")
	public List<User> getUsers(){
	return userService.getUsers();
		
	}
	@PutMapping("/api/1.0/updateUser")
	public GenericResponse updateUser() {
		return userService.updatedUser(null);
		
	}
}
