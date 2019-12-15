import React, { Component } from 'react'
import BackIcon from './images/backicon.png'


export class GoHomeButton extends Component {
  render() {
    return (
      <img src={BackIcon} className="back-button " onClick={this.props.handleGoHome}/>
    )
  }
}

export default GoHomeButton
