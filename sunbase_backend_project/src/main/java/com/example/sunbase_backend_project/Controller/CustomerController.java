package com.example.sunbase_backend_project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sunbase_backend_project.Model.Customer;
import com.example.sunbase_backend_project.Repo.CustomerRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/check")
    public ResponseEntity<?> helloPrajakta() {
        return ResponseEntity.ok("I love u, Prajakta");
    }

    @PostMapping("/create")
    public ResponseEntity<?> createCustomer(@RequestBody Customer customer) {
        // Validate customer data here if needed
        System.out.println(customer);
        Customer save = this.customerRepository.save(customer);
        return ResponseEntity.ok(save);

    }

    @GetMapping("/get/all")
    public ResponseEntity<?> getAllCustomers() {
        return ResponseEntity.ok(this.customerRepository.findAll());
    }

    @PutMapping("/update/{email}")
    public ResponseEntity<?> updateCustomer(@PathVariable String email, @RequestBody Customer updatedCustomer) {
        System.out.println(email);
        Customer existingCustomer = this.customerRepository.findById(email).orElse(null);

        if (existingCustomer == null) {
            return ResponseEntity.notFound().build();
        }
        existingCustomer.setfirstname(updatedCustomer.getfirstname());
        existingCustomer.setlastname(updatedCustomer.getlastname());
        existingCustomer.setstreet(updatedCustomer.getstreet());
        existingCustomer.setaddress(updatedCustomer.getaddress());
        existingCustomer.setcity(updatedCustomer.getcity());
        existingCustomer.setstate(updatedCustomer.getstate());
        existingCustomer.setphone(updatedCustomer.getphone());
        Customer savedCustomer = this.customerRepository.save(existingCustomer);

        return ResponseEntity.ok(savedCustomer);
    }

    @DeleteMapping("/delete/{email}")
    public ResponseEntity<?> deleteCustomer(@PathVariable String email) {
        Customer existingCustomer = this.customerRepository.findById(email).orElse(null);

        if (existingCustomer == null) {
            return ResponseEntity.notFound().build();
        }

        this.customerRepository.delete(existingCustomer);

        return ResponseEntity.ok("Customer deleted successfully");
    }
}
