package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="review")
public class ReviewEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String favmovie;
	private double rating;
	private String yourcomments;
	public String getFavmovie() {
		return favmovie;
	}
	public void setFavmovie(String favmovie) {
		this.favmovie = favmovie;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public String getYourcomments() {
		return yourcomments;
	}
	public void setYourcomments(String yourcomments) {
		this.yourcomments = yourcomments;
	}
	public ReviewEntity(String favmovie, double rating, String yourcomments) {
		super();
		this.favmovie = favmovie;
		this.rating = rating;
		this.yourcomments = yourcomments;
	}
	public ReviewEntity() {
		super();
	}
	
}
