package com.mycompany.TwitterClone.Error;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;


import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RestController;

import com.mycompany.TwitterClone.User.User;
import com.mycompany.TwitterClone.User.UserRepository;

import shared.CurrentUser;

@RestController
public class AuthController {

	@Autowired
	UserRepository userRepo;

	@PostMapping("/api/1.0/auth")
	ResponseEntity<?> handleAuthentication(@CurrentUser User user) {

		return ResponseEntity.ok(user);

	}
}
