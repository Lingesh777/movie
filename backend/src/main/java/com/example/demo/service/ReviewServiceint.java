package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.ReviewEntity;

public interface ReviewServiceint {

	public String postReview(ReviewEntity re);
	public List<ReviewEntity> getReview();
	// public List<ReviewEntity> getreviewmovie(String favmovie);
}
