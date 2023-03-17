package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="userdetails")
public class LoginEntity {

	@Id
	private String email;
	private String password;
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
	public LoginEntity(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public LoginEntity() {
		super();
	}
	
	
}
