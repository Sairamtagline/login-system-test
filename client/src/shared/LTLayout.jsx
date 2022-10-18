import React, { Component } from 'react'
import LTTab from './LTTab'

export default class LTLayout extends Component {
  render() {
    return (
        <div className="onboarding-wrap">
            <h1 className="text-center mb-5"> Login System Test</h1>
            <div className="onboarding">
                <LTTab/>
            </div>
        </div>
    )
  }
}
