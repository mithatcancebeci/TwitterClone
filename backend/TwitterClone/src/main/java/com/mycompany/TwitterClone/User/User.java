package com.mycompany.TwitterClone.User;







import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
@Data
@Document
public class User {
    @Id
   private String id;

 
    @Indexed(unique=true)
    private String username;
    
  
   private String password;

   @Indexed(unique=true)
   private String email;

}
