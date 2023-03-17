package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.LoginEntity;
import com.example.demo.repository.LoginRepo;

@Service
public class LoginService implements LoginServiceInt {

	@Autowired
	public LoginRepo lr;
	@Override
	public boolean getDetails(String email,String password) {
		return lr.existsByEmailAndPassword(email, password);
	}

}
