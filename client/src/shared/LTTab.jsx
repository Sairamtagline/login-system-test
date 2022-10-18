import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export class LTTab extends Component {
  render() {
    return (
      <Tabs
      defaultActiveKey="sign-up"
    >
      <Tab eventKey="sign-up" title="Sign Up">
        <SignUp />
      </Tab>
      <Tab eventKey="login" title="Login">
        <Login />
      </Tab>
    </Tabs>
    );
  }
}

export default LTTab;
