import React, { Component } from 'react'
import { connect } from 'react-redux'
import BackIcon from './images/backicon.png'

export class CityPage extends Component {
  
  handleGoHome = () => {
    this.props.history.push({
      pathname: "/"
    })
  }
  
  render() {
    const day = this.props.city.days.map((day, index) => {
      const date = day.date
      const activity = day.activity.map((item, index) => {
        return (
          <p>{item}</p>
        )
      })
      return (
        <div className="activity-wrapper">
          <p className="date">{date}</p>
          <p className="activity-item">{activity}</p>
        </div>
      )
    })
    const city = this.props.city ? (
      <div className="container section post card-content" key={this.props.city.id}> 
        <div className="city-header">
          <img src={BackIcon} className="back-button" onClick={this.handleGoHome}/>
          <h4 className="center card-title">{this.props.city.cityName}</h4>
        </div>
        {day}
      </div>
    ) : (
      <div className="center">Loading cities...</div>
    )

    return (
      <div className="container">
          {city}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = Math.round(ownProps.match.params.city_id)
  return {
    city:state.cityR.cities.find(city => city.id === id)
    }
}

export default connect(mapStateToProps)(CityPage)
