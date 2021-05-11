package com.bezkoder.spring.data.mongodb.controller;

import com.bezkoder.spring.data.mongodb.model.Games;
import com.bezkoder.spring.data.mongodb.model.Orders;
import com.bezkoder.spring.data.mongodb.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")

public class OrdersController {


    @Autowired
    OrderRepo  orderRepo;


    @GetMapping("/orders")
    public ResponseEntity<List<Orders>> getAllOrders(@RequestParam(required = false) String username) {
        try {
            List<Orders> orders = new ArrayList<Orders>();

            if (username == null)
                orderRepo.findAll().forEach(orders::add);
            else
                orderRepo.findByUsername(username).forEach(orders::add);

            if (orders.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(orders, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/orders")
    public ResponseEntity<Orders> createGames(@RequestBody Orders orders) {
        try {
            Orders _orders = orderRepo.save(new Orders(
                    orders.getUsername(),
                    orders.getTitle(),
                    orders.getDescription(),
                    false,
                    orders.getFilePath(),
                    orders.getPrice(),
                    orders.getCategories()));
            return new ResponseEntity<>(_orders, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
