package com.example.sunbase_backend_project.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "Customer")
public class Customer {
    @Id
    private String email;
    private String firstname;
    private String lastname;
    private String street;
    private String address;
    private String city;
    private String state;
    private String phone;
    public String getfirstname() {
        return firstname;
    }
    public void setfirstname(String firstname) {
        this.firstname= firstname;
    }
    public String getlastname() {
        return lastname;
    }
    public void setlastname(String lastname) {
        this.lastname = lastname;
    }
    public String getstreet() {
        return street;
    }
    public void setstreet(String street) {
        this.street = street;
    }
    public String getaddress() {
        return address;
    }
    public void setaddress(String address) {
        this.address = address;
    }
    public Customer(String firstname, String lastname, String street, String address, String city, String state,
            String email, String phone) {
        this.firstname= firstname;
        this.lastname = lastname;
        this.street = street;
        this.address = address;
        this.city = city;
        this.state = state;
        this.email = email;
        this.phone = phone;
    }
    public String getcity() {
        return city;
    }
    public void setcity(String city) {
        this.city = city;
    }
    public String getstate() {
        return state;
    }
    public void setstate(String state) {
        this.state = state;
    }
    public String getemail() {
        return email;
    }
    public void setemail(String email) {
        this.email = email;
    }
    public String getphone() {
        return phone;
    }
    public void setphone(String phone) {
        this.phone = phone;
    }
}


