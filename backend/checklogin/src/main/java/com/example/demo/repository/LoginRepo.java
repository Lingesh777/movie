package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.LoginEntity;

@Repository
public interface LoginRepo extends JpaRepository<LoginEntity, String> {
	public boolean existsByEmailAndPassword(String email,String password);
}
