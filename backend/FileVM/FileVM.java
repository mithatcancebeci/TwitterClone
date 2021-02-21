package com.mycompany.TwitterClone.FileVM;

import com.mycompany.TwitterClone.File.FileAttachment;

import lombok.Data;

@Data
public class FileVM {
 private String name;
 private String fileType;
 public FileVM(FileAttachment fileAttachment) {
	 this.setName(fileAttachment.getName());
	 this.setFileType(fileAttachment.getFileType());
	 
 }
 
}
