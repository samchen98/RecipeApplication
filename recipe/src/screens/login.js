import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    console.log(email)
    console.log(password)
    const newUser = {
      email: email,
      password: password
    };
    // axios.post(config.serversite + '/users/auth', newUser)
    // .then(res=> {if(res.data.success = true){
    //   if(res.data.message.userType == "patient"){
    //     this.storePatient(res.data.message)
        
    //   }
    //   else if(res.data.message.userType == "physician"){
    //     console.log(res)
    //     this.storePhysician(res.data.message)
     
    //   }
    // }
    // else{
    //   console.log("Email invalid")
    // }
    // });
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
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
          Login
        </Button>
      </form>
    </div>
  );
}