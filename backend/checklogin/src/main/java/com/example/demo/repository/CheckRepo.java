package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.CheckEntity;

@Repository
public interface CheckRepo extends JpaRepository<CheckEntity, String> {
	public boolean existsByemail(String email);
}
