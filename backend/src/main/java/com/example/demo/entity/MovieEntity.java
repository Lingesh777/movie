package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="movie")
public class MovieEntity {
	@Id
	private String moviename;
	private String director;
	private String actor;
	private String actress;
	private String category;
	private String duration;
	private String releasedate;
	private String language;
	public String getMoviename() {
		return moviename;
	}
	public void setMoviename(String moviename) {
		this.moviename = moviename;
	}
	public String getActor() {
		return actor;
	}
	public void setActor(String actor) {
		this.actor = actor;
	}
	public String getActress() {
		return actress;
	}
	public void setActress(String actress) {
		this.actress = actress;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	
	public String getDirector() {
		return director;
	}
	public void setDirector(String director) {
		this.director = director;
	}
	public String getReleasedate() {
		return releasedate;
	}
	public void setReleasedate(String releasedate) {
		this.releasedate = releasedate;
	}
	public MovieEntity(String moviename, String director, String actor, String actress, String category,
			String duration, String releasedate, String language) {
		super();
		this.moviename = moviename;
		this.director = director;
		this.actor = actor;
		this.actress = actress;
		this.category = category;
		this.duration = duration;
		this.releasedate = releasedate;
		this.language = language;
	}
	public MovieEntity() {
		super();
	}
	
}
