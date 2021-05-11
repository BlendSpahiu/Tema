package com.bezkoder.spring.data.mongodb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "games")
public class Games {
  @Id
  private String id;

  private String title;
  private String description;
  private boolean published;
  private int price;
  private String filePath;
  private String category;

  public Games() {
  }

  public Games(String title, String description, boolean published, String filePath, int price,
               String category) {
    this.title = title;
    this.description = description;
    this.published = published;
    this.category = category;
    this.filePath = filePath;
    this.price = price;
  }

  public String getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public boolean isPublished() {
    return published;
  }

  public void setPublished(boolean isPublished) {
    this.published = isPublished;
  }

  public String getCategories() { return category; }

  public void setCategories(String category) { this.category = category; }

  public int getPrice() { return price; }

  public void setPrice(int price) { this.price = price; }

  public String getFilePath() { return filePath; }

  public void setFilePath(String filePath) { this.filePath = filePath; }


  @Override
  public String toString() {
    return "Games [id=" + id + ", title=" + title + ", desc=" + description + ", published=" + published + "]";
  }
}
