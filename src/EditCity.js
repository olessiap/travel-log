import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewDate} from './redux/actions/cityActions.js'

import GoHomeButton from './GoHomeButton';

export class EditCity extends Component {
 
  handleGoHome = () => {
    this.props.history.push({
      pathname: '/'
    })
  } 

  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value,
      id: Math.floor(Math.random() * (1000 - 1)),
    })
  }

  handleSubmit = (e) => {
    console.log(this.state)
    e.preventDefault()
    this.props.addNewDate(this.state, this.props.history.location.state.city_id)
    this.setState({
      [e.target.id]: '',
    })
    this.props.history.push('/')
  }
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <GoHomeButton handleGoHome={this.handleGoHome}/>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="date">Date</label>
            <input type="text" className="datepicker" id="date" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink center">Save Date</button>
          </div>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addNewDate: (date, cityId) => dispatch(addNewDate(date, cityId)),
  }
}

export default connect(null, mapDispatchToProps)(EditCity)
