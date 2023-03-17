package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.LoginService;
@CrossOrigin("*")
@RestController
public class LoginController {

	@Autowired
	public LoginService ls;
	
	@GetMapping("/login")
	public String getlogin(@RequestParam String email,@RequestParam String password)
	{
		boolean isValid=ls.getDetails(email, password);
		if(isValid)
		{
			return "Login Successful";
		}
		else
		{
			return "Invalid Email or Password";
		}
	}
}
