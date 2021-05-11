package com.bezkoder.spring.data.mongodb.model;

import org.springframework.data.annotation.Id;



public class Categories {
    @Id
    private String id;
    private String catTitle;

    public Categories(String id, String catTitle) {
        this.id = id;
        this.catTitle = catTitle;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCatTitle() {
        return catTitle;
    }

    public void setCatTitle(String catTitle) {
        this.catTitle = catTitle;
    }

    @Override
    public String toString() {
        return "Categories{" +
                "id='" + id + '\'' +
                ", catTitle='" + catTitle + '\'' +
                '}';
    }
}
