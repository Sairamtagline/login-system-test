import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import validationFn from '../utils/validation';
import LTButton from './LTButton';
import { LTError } from './LTError';

class LTForm extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      error: {
        email: false,
        password: false,
      },
      isValid: false,
    };

  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: { [name]: !validationFn({ name, value }) } });
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={this.handleChange}
            />
          {error.email && <LTError message="Please enter a valid email address"/>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
            {error.password &&<LTError message={this.props.message}/>}
          </Form.Group>
          <div className="text-end">
            <LTButton variant="primary" size="lg" type="submit" text={this.props.btnName} />
          </div>
        </Form>
      </>
    )
  }
}

export default LTForm;