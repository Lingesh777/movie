package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.MovieEntity;

public interface MovieServiceInt {

	public List<MovieEntity> getDetails();
	public List<MovieEntity> getDetails1(String moviename);
	public String postDetails(MovieEntity me);
	public String deleteDetails(String moviename);
	public String updateDetails(MovieEntity me);

}
