package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.ReviewEntity;
import com.example.demo.repository.ReviewRepo;
@Service
public class ReviewService implements ReviewServiceint {
@Autowired
public ReviewRepo rr;
	
	@Override
	public String postReview(ReviewEntity re) {
		rr.save(re);
		return "posted successfully";
	}

	@Override
	public List<ReviewEntity> getReview() {
		return rr.findAll();
	}

	// @Override
	// public List<ReviewEntity> getreviewmovie(String favmovie)
	// {
	// 	return rr.findByMovieName(favmovie);
	// }
}
