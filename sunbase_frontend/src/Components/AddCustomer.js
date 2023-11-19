import React, { useState } from "react";
import axios from 'axios';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function AddCustomer(props) {
  const url = "http://localhost:8443/api/create";
    const navigate = useNavigate();
    let submitHandler = async(e)=>{
        e.preventDefault();
        props.setShow(false);
        const data = {
          email,
          firstname,
          lastname,
          phone,
          street, 
          address,
          city, 
          state
        }
        const headers = {
          'Content-Type': 'application/json',
        };
        try {
          const response = await axios.post(url, data, { headers });
          console.log('Response:', response.data);
        } catch (error) {
          console.error('Error:', error);
        }

    }
    const [firstname, setFirstname ] = useState("");
    const [lastname, setLastname] = useState("");
    const [street, setStreet] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [email, setEmail] = useState("");
    const [phone , setPhone] = useState("");
    const firstnameHandler = (e)=>{
      e.preventDefault();
      setFirstname(e.target.value);
    }
    const lastNameHandler = (e)=>{
      e.preventDefault();
      setLastname(e.target.value);
    }
    const streetHandler = (e)=>{
      e.preventDefault();
      setStreet(e.target.value);
    }
    const stateHandler =(e)=>{
      e.preventDefault();
      setState(e.target.value);
    }
    const addressHandler = (e)=>{
      e.preventDefault();
      setAddress(e.target.value);
    }
    const cityHandler = (e)=>{
      e.preventDefault();
      setCity(e.target.value);
    }
    const emailHandler = (e)=>{
      e.preventDefault();
      setEmail(e.target.value);
    }
    const phoneHandler = (e)=>{
      e.preventDefault();
      setPhone(e.target.value)
    }
    
  return (
    <Container>
      <Row className="justify-content-center ">
        <Col md={6}>
          <Form>
            <h4 className="mb-4 my-2">Customer Details</h4>
            {/* First Name and Last Name in the same row for large screens */}
            <Row>
              <Col md={6} xs={12}>
                <Form.Group>
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control type="text" placeholder="First name" onChange={firstnameHandler} />
                </Form.Group>
              </Col>
              <Col md={6} xs={12}>
                <Form.Group>
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control type="text" placeholder="Last name" onChange={lastNameHandler} />
                </Form.Group>
              </Col>
              <Col md={6} xs={12}>
                <Form.Group>
                  <Form.Label>Street:</Form.Label>
                  <Form.Control type="text" placeholder="Street" onChange={streetHandler} />
                </Form.Group>
              </Col>
              <Col md={6} xs={12}>
                <Form.Group>
                  <Form.Label>Address:</Form.Label>
                  <Form.Control type="text" placeholder="Address" onChange={addressHandler}/>
                </Form.Group>
              </Col>
              <Col md={6} xs={12}>
                <Form.Group>
                  <Form.Label>City:</Form.Label>
                  <Form.Control type="text" placeholder="City" onChange={cityHandler} />
                </Form.Group>
              </Col>
              <Col md={6} xs={12}>
                <Form.Group>
                  <Form.Label>State:</Form.Label>
                  <Form.Control type="text" placeholder="State" onChange={stateHandler} />
                </Form.Group>
              </Col>
              <Col md={6} xs={12}>
                <Form.Group>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" placeholder="Email" onChange={emailHandler} />
                </Form.Group>
              </Col>
              <Col md={6} xs={12}>
                <Form.Group>
                  <Form.Label>Phone:</Form.Label>
                  <Form.Control type="text" placeholder="Phone" onChange={phoneHandler}/>
                </Form.Group>
              </Col>
            </Row>
            {/* Submit Button */}
            <Button variant="primary" onClick={submitHandler}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
