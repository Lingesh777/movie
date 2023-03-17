package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.CheckEntity;
import com.example.demo.repository.CheckRepo;

@Service
public class CheckService implements CheckServiceInt {

	@Autowired
	public CheckRepo cr;
	@Override
	public List<CheckEntity> getDetails() {
		return cr.findAll();
	}

	@Override
	public void postDetails(CheckEntity ce) {
		cr.save(ce);
	}

	@Override
	public String updateDetails(CheckEntity ce) {
		cr.save(ce);
		return "updated successfully";
	}

	@Override
	public String deleteDetails(String username) {
		cr.deleteById(username);
		return username+" has been deleted";
	}

	@Override
	public boolean checkuser(String username) {
		return cr.existsById(username);
	}

	@Override
	public boolean checkemail(String email) {
		return cr.existsByemail(email);
	}

}
