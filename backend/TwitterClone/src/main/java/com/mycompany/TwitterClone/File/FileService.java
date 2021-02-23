package com.mycompany.TwitterClone.File;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.apache.tika.Tika;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.mycompany.TwitterClone.Configuration.AppConfiguration;
import com.mycompany.TwitterClone.User.User;


@Service
@EnableScheduling
public class FileService {

	AppConfiguration appConfiguration;
	Tika tika;
	FileAttachmentRepository fileAttachmentRepository;

	public String writeBase64EncodedStringToFile(String image) throws IOException {
		String fileName = generateRandomName();
		File target = new File(appConfiguration.getProfileStorage() + "/" + fileName);
		try (OutputStream outputStream = new FileOutputStream(target)) {
			byte[] base64encoded = Base64.getDecoder().decode(image);
			outputStream.write(base64encoded);
		}catch(Exception e){
			e.printStackTrace();
		}
		return fileName;
	}

	@Autowired
	public FileService(AppConfiguration appConfiguration, FileAttachmentRepository fileAttachmentRepository) {
		super();
		this.appConfiguration = appConfiguration;
		this.tika = new Tika();
		this.fileAttachmentRepository = fileAttachmentRepository;
	}

	public String generateRandomName() {
		return UUID.randomUUID().toString().replaceAll("-", "");
	}
	public void deleteBgImage(String oldBgName) {
		if(oldBgName==null)
			return;
		deleteFile(Paths.get(appConfiguration.getBgStorage(),oldBgName));
	}

	public void deleteProfilImage(String oldImageName) {
		if (oldImageName == null) {
			return;
		}
		deleteFile(Paths.get(appConfiguration.getProfileStorage(),oldImageName));
	}
	public void deleteAttachmentFile(String oldImageName) {
		if (oldImageName == null) {
			return;
		}
		deleteFile(Paths.get(appConfiguration.getAttachmentStorage(),oldImageName));
	}

	private void deleteFile(Path path) {
		try {

			Files.deleteIfExists(path);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public String detectType(byte[]arr) {
		return tika.detect(arr);

	}
	public String detectType(String base64) {
		byte[] base64encoded=Base64.getDecoder().decode(base64);
		return detectType(base64encoded);

	}
	public FileAttachment saveTweetAttachment(MultipartFile multipartFile) {

		String fileName = generateRandomName();
		File target = new File(appConfiguration.getAttachmentStorage() + "/" + fileName);
        String fileType=null;
		try {
			byte[] arr=multipartFile.getBytes();
			OutputStream outputStream;
			outputStream = new FileOutputStream(target);
			outputStream.write(arr);
			fileType=detectType(arr);
			outputStream.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		FileAttachment attachment = new FileAttachment();
		attachment.setName(fileName);
		attachment.setDate(new Date());
		attachment.setFileType(fileType);
		return fileAttachmentRepository.save(attachment);

	}

	@Scheduled(fixedRate = 12 * 60 * 60 * 1000)
	public void cleanupStorage() {
		Date twentyFourHoursAgo = new Date(System.currentTimeMillis() - (12 * 60 * 60 * 1000));
		List<FileAttachment> filesToBeDeleted = fileAttachmentRepository
				.findByDateBeforeAndTweetIsNull(twentyFourHoursAgo);
		for (FileAttachment file : filesToBeDeleted) {

			deleteAttachmentFile(file.getName());
			fileAttachmentRepository.deleteById(file.getId());
		}
	}

	public void deleteAllStoredFileForUser(User inDB) {
		deleteProfilImage(inDB.getImage());
		List<FileAttachment> filesToBeRemoved=fileAttachmentRepository.findByTweetUser(inDB);
		for(FileAttachment file:filesToBeRemoved) {
			deleteAttachmentFile(file.getName());
		}
		
	}


}
