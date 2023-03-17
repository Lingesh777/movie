package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ReviewEntity;
import com.example.demo.service.ReviewService;
@CrossOrigin("*")
@RestController
public class ReviewController {

	@Autowired
	public ReviewService rs;
	
	@GetMapping("/getreview")
	public List<ReviewEntity> get()
	{
		return rs.getReview();
	}
	
	@PostMapping("/addreview")
	public String post(@RequestBody ReviewEntity re)
	{
		return rs.postReview(re);
	}
}
