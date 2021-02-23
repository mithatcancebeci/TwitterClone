package com.mycompany.TwitterClone.Configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired

	UserAuthService userAuthService;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();

		http.headers().frameOptions().disable();

		http.httpBasic().authenticationEntryPoint(new AuthEntryPoint());
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/1.0/auth").authenticated()
				.antMatchers(HttpMethod.POST, "/api/1.0/tweets").authenticated()
				.antMatchers(HttpMethod.POST, "/api/1.0/postReply").authenticated().and().authorizeRequests()
				.anyRequest().permitAll();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userAuthService).passwordEncoder(passwordEncoder());
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
