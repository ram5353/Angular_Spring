package com.example.demo.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Details_DTO;
import com.example.demo.repository.Details;


@CrossOrigin
@RestController
public class DisplayController {
	
	@Autowired
	Details repo;
	
	@GetMapping("/display/{id}")
	public Optional<Details_DTO> Display(@PathVariable int id) {
		System.out.println(id);
		return repo.findById(id);
	     	 
		
	}
   
}
