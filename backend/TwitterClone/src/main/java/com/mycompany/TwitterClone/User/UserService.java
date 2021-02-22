package com.mycompany.TwitterClone.User;




import java.io.IOException;

import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mycompany.TwitterClone.Error.NotFoundException;
import com.mycompany.TwitterClone.File.FileService;
import com.mycompany.TwitterClone.User.UserVM.UserUpdateVM;



@Service
public class UserService {

	
	UserRepository userRepository;
	PasswordEncoder passwordEncoder;
	FileService fileService;
	
	public UserService(UserRepository userRepository,PasswordEncoder passwordEncoder,FileService fileService) {
		this.userRepository=userRepository;
		this.passwordEncoder=passwordEncoder;
		this.fileService=fileService;
	}
	
	public void save(User user) {
        
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);
		
	}




	public Page<User> getUsers(Pageable page,User user){
		if(user !=null) {
			return userRepository.findByUsernameNot(user.getUsername(),page);
		}
		return 	userRepository.findAll(page);
	}
	public User getByUsername(String username) {
		User inDB=userRepository.findByUsername(username);
        if(inDB==null) {
        	throw new NotFoundException();
        }
        	return inDB;
        
        
	}
	

	public User updatedUser(UserUpdateVM updated, String username) {
		User inDB=getByUsername(username);
		inDB.setDisplayName(updated.getDisplayName());
		inDB.setDescription(updated.getDescription());
		if(updated.getBgimage()!=null) {
			String oldBgImage=inDB.getBgimage();
			try {
				String storedFileName=fileService.writeBase64EncodedStringToFile(updated.getBgimage());
				inDB.setBgimage(storedFileName);
			} catch (IOException e) {
					e.printStackTrace();
			}
			fileService.deleteBgImage(oldBgImage);
			
		}
		if(updated.getImage()!=null) {
			String oldImage=inDB.getImage();
			try {
				String storedFile=fileService.writeBase64EncodedStringToFile(updated.getImage());
				inDB.setImage(storedFile);
			} catch (IOException e) {
		e.printStackTrace();
			}
		fileService.deleteProfilImage(oldImage);	
		}
		
		return userRepository.save(inDB);
	}

	

}
