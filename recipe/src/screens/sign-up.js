import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./login.css";
import axios from 'axios';
const config = require("../config")

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");


  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    

    console.log(email)
    console.log(password)
    const newUser = {
      fname: fname,
      lname: lname,
      email: email,
      password: password
    };
    axios.post(config.serversite + '/users/add', newUser)
      .then(res => {
        console.log(res.data)
        
      });
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
      <FormGroup controlId="fname" bsSize="large">
          <div>First name</div>
          <FormControl
            autoFocus
            type="fname"
            value={fname}
            onChange={e => setFname(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="lname" bsSize="large">
          <div>Last name</div>
          <FormControl
            autoFocus
            type="lname"
            value={lname}
            onChange={e => setLname(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="email" bsSize="large">
          <div>Email</div>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <div>Password</div>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Sign-up!
        </Button>
      </form>
    </div>
  );
}