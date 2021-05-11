package com.bezkoder.spring.data.mongodb.controller;


import org.springframework.beans.factory.annotation.Autowired;
import com.bezkoder.spring.data.mongodb.service.imageService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api/images")
public class ImageController {

    @Autowired
    public imageService imageService;
    @PostMapping(value ="upload")
    public ResponseEntity uploadImage(@RequestParam MultipartFile     file){
        return this.imageService.uploadToLocalFileSystem(file);
    }
    @GetMapping(
            value = "getImage/{imageName:.+}",
            produces = {MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_GIF_VALUE,MediaType.IMAGE_PNG_VALUE}
    )
    public @ResponseBody byte[] getImageWithMediaType(@PathVariable(name = "imageName") String fileName) throws IOException {
        return this.imageService.getImageWithMediaType(fileName);
    }
}
