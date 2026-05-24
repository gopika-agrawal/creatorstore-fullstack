package com.example.creatorstore.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.creatorstore.entities.Product;
import com.example.creatorstore.repositories.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    
    public Product createProduct(Product product){
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Product product){
        Product pro = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found for id: " + id));
        pro.setName(product.getName());
        pro.setDescription(product.getDescription());
        pro.setCategory(product.getCategory());
        pro.setPrice(product.getPrice());
        pro.setStockQuantity(product.getStockQuantity());

        return productRepository.save(pro);

    }

    public List<Product> getProducts(){
        return productRepository.findAll();
    }

    public Product getById(Long id){
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found for id: " + id));
        return product;
    }

    public void deleteById(Long id){
        if(productRepository.existsById(id)){
            productRepository.deleteById(id);
        }
    }





}
