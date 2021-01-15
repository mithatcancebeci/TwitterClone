package com.mycompany.TwitterClone.User;

import java.util.List;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import shared.GenericResponse;

@Service
public class UserService {

	
	UserRepository userRepository;
	PasswordEncoder passwordEncoder;
	
	
	public UserService(UserRepository userRepository) {
		this.userRepository=userRepository;
		this.passwordEncoder=new BCryptPasswordEncoder();
	}
	
	public void save(User user) {

		user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);
		
	}

	public List<User> getUsers() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	public GenericResponse updatedUser(User user) {
        	
		userRepository.save(user);
		return null;
	}
}
