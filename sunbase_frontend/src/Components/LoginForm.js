import { Button } from 'bootstrap';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const url = "http://localhost:8443/api/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async(e)=>{
    e.preventDefault();
    const data = {
      email, 
      password
    }
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const response = await axios.post(url, data, { headers });
      // Handle the successful response here
      console.log('Response:', response.data);
      if(response !== null){
        if(response.data.password === password){
          navigate('/customer');
        }else{
          alert("not authenticated");
        }
      }
    } catch (error) {
      // Handle errors here
      console.error('Error:', error);
    }
    
  }
  const emailHandler = (e)=>{
    e.preventDefault();
    setEmail(e.target.value);
  }
  const passwordHandler = (e)=>{
    e.preventDefault();
    setPassword(e.target.value);
  }
  return (
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address/LoginId</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={emailHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" onChange={passwordHandler}/>
      </Form.Group>
      <button className='bg-primary ' style={{width:"8vw ", height:"5vh", borderRadius:"10px", color:'white'}} onClick={loginHandler}> Login</button>
    </Form>
      
  );
}

export default LoginForm;