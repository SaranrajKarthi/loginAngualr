package com.saran.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saran.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmail(String email);
}
