package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.MovieEntity;
import com.example.demo.service.MovieService;

@CrossOrigin("*")
@RestController
public class MovieController {

	@Autowired
	public MovieService ms;
	
	@GetMapping("/getmovie")
	public List<MovieEntity> get()
	{
		return ms.getDetails();
	}
	@GetMapping("/getmovie/{moviename}")
	public List<MovieEntity> get(@PathVariable String moviename)
	{
		return ms.getDetails1(moviename);
	}
	
	@PostMapping("/postmovie")
	public String post(@RequestBody MovieEntity me)
	{
		return ms.postDetails(me);
	}
	
	@DeleteMapping("/deletemovie/{moviename}")
	public String delete(@PathVariable String moviename)
	{
		return ms.deleteDetails(moviename);
	}
	
	@PutMapping("/updatemovie/{moviename}")
	public String update(@RequestBody MovieEntity me,@PathVariable String moviename)
	{
		me.setMoviename(moviename);
		return ms.updateDetails(me);
	}
}
