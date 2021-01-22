package com.mycompany.TwitterClone.Configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mycompany.TwitterClone.User.User;
import com.mycompany.TwitterClone.User.UserRepository;

@Service
public class UserAuthService implements UserDetailsService{

    @Autowired
	UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User inDB=userRepository.findByUsername(username);
		if(inDB==null) 
			throw new UsernameNotFoundException("Account not found");
	return inDB;
	
	}
	
 
	
}
