package com.mycompany.TwitterClone.User;


import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mycompany.TwitterClone.Reply.Reply;
import com.mycompany.TwitterClone.tweet.Tweet;

import lombok.Data;

@Data
@Entity
public class User implements UserDetails{
	/**
	 * 
	 */
	private static final long serialVersionUID = -8773759572462407842L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    @UniqueUsername
	@NotNull(message = "Username can not be null")
	@Size(min = 3, max = 30, message = "Username character must be between min 3 and 15")
	private String username;
    private String description;
	@NotNull(message = "Password can not be null")
	@Size(min = 8, max = 15, message = "Password character must be between min 8 and 15")
	private String password;
	private String bgimage;
	@NotNull(message = "displayName can not be null")
	@Size(min = 4, max = 50, message = "Email Character must be between min 4 and 30 ")
	private String displayName;
	

			
    @JsonIgnore
	@OneToMany(mappedBy="user",cascade = CascadeType.REMOVE)
	private List<Tweet> tweets;
    @JsonIgnore
    @OneToMany(mappedBy="user",cascade=CascadeType.REMOVE)
	private List<Reply> replies;
    private String image;
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return AuthorityUtils.createAuthorityList("Role_user");
	}


	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override	
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
