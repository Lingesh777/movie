package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="userdetails")
public class CheckEntity {
	@Id
	private String username;
	private String email;
	private String password;
	private String mobilenum;
	private String language;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getmobilenum() {
		return mobilenum;
	}
	public void setmobilenum(String mobilenum) {
		this.mobilenum = mobilenum;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public CheckEntity(String username, String email, String password, String mobilenum, String language) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
		this.mobilenum = mobilenum;
		this.language = language;
	}
	public CheckEntity() {
		super();
	}
	
}
