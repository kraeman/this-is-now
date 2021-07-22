import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function Login() {

  state = {
      email: "",
      password: ""
  }  

  validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  setEmail = (event) => {
    this.setState({
        email: event.target.value,
      });
  }

  setPassword = (event) => {
    this.setState({
        password: event.target.value,
      });
}

  handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={this.state.email}
            onChange={(e) => this.setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={this.state.password}
            onChange={(e) => this.setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
