package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.ReviewEntity;
@Repository
public interface ReviewRepo extends JpaRepository<ReviewEntity, Integer> {
    // public List<ReviewEntity> findByMovieName(String favmovie);
}
