package com.bezkoder.spring.data.mongodb.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.spring.data.mongodb.model.Games;
import com.bezkoder.spring.data.mongodb.repository.GamesRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")

public class GameController {

  @Autowired
  GamesRepo gamesRepo;


  @GetMapping("/games")
  public ResponseEntity<List<Games>> getAllGames(@RequestParam(required = false) String title) {
    try {
      List<Games> games = new ArrayList<Games>();

      if (title == null)
        gamesRepo.findAll().forEach(games::add);
      else
        gamesRepo.findByTitleContaining(title).forEach(games::add);

      if (games.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }

      return new ResponseEntity<>(games, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  
  
  @GetMapping("/games/{id}")
  public ResponseEntity<Games> getGameById(@PathVariable("id") String id) {
    Optional<Games> gameData = gamesRepo.findById(id);

    if (gameData.isPresent()) {
      return new ResponseEntity<>(gameData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping("/games")
  public ResponseEntity<Games> createGames(@RequestBody Games games) {
    try {
      Games _games = gamesRepo.save(new Games(
              games.getTitle(),
              games.getDescription(),
              false,
              games.getFilePath(),
              games.getPrice(),
              games.getCategories()));
      return new ResponseEntity<>(_games, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PutMapping("/games/{id}")
  public ResponseEntity<Games> updateGame(@PathVariable("id") String id, @RequestBody Games games) {
    Optional<Games> gameData = gamesRepo.findById(id);

    if (gameData.isPresent()) {
      Games _tutorial = gameData.get();
      _tutorial.setTitle(games.getTitle());
      _tutorial.setDescription(games.getDescription());
      _tutorial.setPublished(games.isPublished());
      _tutorial.setPrice(games.getPrice());
      return new ResponseEntity<>(gamesRepo.save(_tutorial), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/games/{id}")
  public ResponseEntity<HttpStatus> deleteGame(@PathVariable("id") String id) {
    try {
      gamesRepo.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping("/games")
  public ResponseEntity<HttpStatus> deleteAllGams() {
    try {
      gamesRepo.deleteAll();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/games/published")
  public ResponseEntity<List<Games>> findByPublished() {
    try {
      List<Games> gameData = gamesRepo.findByPublished(true);

      if (gameData.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(gameData, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
