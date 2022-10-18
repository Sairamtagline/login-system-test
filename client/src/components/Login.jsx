import React, { Component } from "react";
import { connect } from "react-redux";
import LTForm from "../shared/LTForm";
import { loginAction } from "../store/actions/apiAction";

class Login extends Component {
  render() {
    return (
      <LTForm btnName="Login" message="Please enter valid password" handleAPIFn={(params) => this.props.login(params)}
        email={this.props?.email} />
    );
  }
}
//mapStateToProps
const mapStateToProps = (state) => {
  return {
    email: state.signupReducer.email,
  };
};
//map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(loginAction(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);