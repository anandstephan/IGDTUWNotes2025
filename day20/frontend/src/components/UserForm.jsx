import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const UserForm = ({setLoad}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      city,
    };
    console.log('Form Data:', formData);
    const response = await fetch('http://localhost:3000/users/addUser',{
      method:"POST",
      headers:{
        'Content-type':"application/json"
      },
      body:JSON.stringify({firstName,lastName,email,password,city})
    })
    const result = await response.json()
    console.log(result)
    if(result.msg === "User Created Successfully"){
      setLoad(prev =>!prev)
    }

  };

  return (
    <Container className="mt-5">
      <h3 className="mb-4">Signup Form</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default UserForm;
