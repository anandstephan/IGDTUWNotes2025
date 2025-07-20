import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';

const UsersTable = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        async function getData(){
            const res = await fetch('http://localhost:3000/users/showUsers')
            const response = await res.json()
            setUsers(response)
            
        }
        getData()
    },[])

  return (
    <Container className="mt-5">
      <h3 className="mb-4">Users Table</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UsersTable;
