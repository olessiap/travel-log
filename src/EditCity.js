import React, { Component } from 'react'
import GoHomeButton from './GoHomeButton';

export class EditCity extends Component {
  
  handleGoHome = () => {
    this.props.history.push({
      pathname: '/'
    })
  } 
  render() {
    return (
      <div>
        <GoHomeButton handleGoHome={this.handleGoHome}/>
        EDIT FORM HERE!
      </div>
    )
  }
}

export default EditCity
