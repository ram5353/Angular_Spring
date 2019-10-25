package com.example.demo.repository;

import java.util.Optional;

import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Details_DTO;



@Repository
public interface Details extends JpaRepository<Details_DTO,Integer> {
		Optional<Details_DTO> findById(int Id);
}
