import React, { Component } from "react"; 
import LTForm from "../shared/LTForm";

class SignUp extends Component {
  render() {
    return (
        <LTForm btnName="Sign Up" message="Please enter strong password"/>
    );
  }
}

export default SignUp;