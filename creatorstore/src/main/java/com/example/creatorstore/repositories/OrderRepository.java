package com.example.creatorstore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.creatorstore.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {

}
