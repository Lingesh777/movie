package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.MovieEntity;
import com.example.demo.repository.MovieRepo;

@Service
public class MovieService implements MovieServiceInt {

	@Autowired
	public MovieRepo mr;
	@Override
	public List<MovieEntity> getDetails() {
		return mr.findAll();
	}

	@Override
	public String postDetails(MovieEntity me) {
		mr.save(me);
		return "Posted Successfully";
	}

	@Override
	public String deleteDetails(String moviename) {
		mr.deleteById(moviename);
		return "Deleted Sucessfully";
	}

	@Override
	public String updateDetails(MovieEntity me) {
		mr.save(me);
		return "updated successfully";
	}

}
