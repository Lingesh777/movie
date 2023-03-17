package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.CheckEntity;
import com.example.demo.service.CheckService;

@CrossOrigin("*")
@RestController
public class CheckController {

	@Autowired
	public CheckService cs;
	
	@GetMapping("/getsignup")
	public List<CheckEntity> getLogin()
	{
		return cs.getDetails();
	}
	
	@PostMapping("/postsignup")
	public String saveLogin(@RequestBody CheckEntity ce)
	{
		boolean isUserExist = cs.checkuser(ce.getUsername());
		boolean isEmailExist = cs.checkemail(ce.getEmail());
		if(isUserExist) {
			return "username already exists";
		}
		else if(isEmailExist){
			return "email already exists";
		}
		else
		{
			cs.postDetails(ce);
			return "signup success";
		}
	}
	
	@PutMapping("/updatesignup")
	public String update(@RequestBody CheckEntity ce,@RequestParam String username)
	{
		boolean isUserExist = cs.checkuser(ce.getUsername());
		if(isUserExist)
		{
		ce.setUsername(username);
		return cs.updateDetails(ce);
		}
		else
		{
			return "Given User doesn't exist";
		}
	}
	
	@DeleteMapping("/deletesignup")
	public String delete(@RequestParam String username)
	{
		boolean isUserExist = cs.checkuser(username);
		if(isUserExist)
		{
		return cs.deleteDetails(username);
		}
		else
		{
			return "Given User doesn't exist";
		}
	}
}
