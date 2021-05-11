package com.bezkoder.spring.data.mongodb.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.bezkoder.spring.data.mongodb.model.Games;

public interface GamesRepo extends MongoRepository<Games, String> {
  List<Games> findByPublished(boolean published);
  List<Games> findByTitleContaining(String title);

}
