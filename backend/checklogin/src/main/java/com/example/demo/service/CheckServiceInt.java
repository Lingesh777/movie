package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.CheckEntity;

public interface CheckServiceInt {

	public List<CheckEntity> getDetails();
	public void postDetails(CheckEntity ce);
	public String updateDetails(CheckEntity ce);
	public String deleteDetails(String username);
	public boolean checkuser(String username);
	public boolean checkemail(String email);
}
