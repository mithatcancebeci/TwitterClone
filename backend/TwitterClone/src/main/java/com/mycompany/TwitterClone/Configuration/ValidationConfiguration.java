package com.mycompany.TwitterClone.Configuration;


import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.mapping.event.ValidatingMongoEventListener;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;




public class ValidationConfiguration {
	@Bean
	public LocalValidatorFactoryBean localValidatorFactoryBean() {
	    return new LocalValidatorFactoryBean();
	}

	@Bean
	public ValidatingMongoEventListener validatingMongoEventListener(LocalValidatorFactoryBean lfb) {
	    return new ValidatingMongoEventListener(lfb);
	}
}
