import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export class LTTab extends Component {
  constructor() {
    super();
    this.state = {
      key: "sign-up",
      changed: false
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps, prevState', prevProps, prevState)
    if (prevState.key !== this.props.changeTab && !this.state.changed) {
      this.setState({ key: "login", changed: true }, () => {
        this.props.changeTabFn();
      });

    }
  }
  render() {
    console.log('this.props :>> ', this.props);
    return (
      <Tabs
        defaultActiveKey="sign-up"
        activeKey={this.state.key}
        onSelect={(k) => this.setState({ key: k })}
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
//maps state to props
const mapStateToProps = (state) => {
  return {
    changeTab: state.signupReducer.changeTab,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTabFn: () => dispatch({ type: "CHANGE_TAB" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LTTab);
