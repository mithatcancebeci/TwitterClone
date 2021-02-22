package com.mycompany.TwitterClone.Error;

import java.util.Date;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
public class ApiError {
    private int status;
    private String message;
    private String path;
    private long timestamp=new Date().getTime();
    Map<String,String> validationErrors;
    public ApiError(int status,String message,String path) {
    	this.status=status;
    	this.message=message;
    	this.path=path;
    }
}
