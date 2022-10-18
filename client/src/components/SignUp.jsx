import React, { Component } from "react";
import { connect } from "react-redux";
import LTForm from "../shared/LTForm";
import { signUpAction } from "../store/actions/apiAction";

class SignUp extends Component {
  render() {
    return (
      <LTForm btnName="Sign Up" message="Please enter strong password" handleAPIFn={(params) => this.props.signUp(params)} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUpAction(user)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);