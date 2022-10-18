import React, { Component } from "react";
import { connect } from "react-redux";
import LTForm from "../shared/LTForm";

class Login extends Component {
  render() {
    return (
      <LTForm btnName="Login" message="Please enter valid password" />
    );
  }
}

//map state to props
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

//map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    // login: (user) => dispatch(login(user)),
  };
};

export default connect(null, mapDispatchToProps)(Login);