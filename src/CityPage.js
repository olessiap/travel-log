import React, { Component } from 'react'
import { connect } from 'react-redux'
import BackIcon from './images/backicon.png'
import ActivityForm from "./ActivityForm"

export class CityPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activity:null,
      showActivityForm: false,
      showNewActivity:false
    }
  }

  handleGoHome = () => {
    this.props.history.push({
      pathname: '/',
      state:{ activity:this.state}
    })
  }

  handleShowActivityForm = () => {
    this.setState({
      showActivityForm:!this.state.showActivityForm
    })
  }
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.id]:e.target.value,
  //     // id: Math.floor(Math.random() * (1000 - 1)),
  //   })
  // }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      showNewActivity:!this.state.showNewActivity,
      id: '',
      [e.target.id]: ''
    })
  }
  render() {
    console.log(this.props)
    // const activities = this.state.activity ? (
    //   this.state.activity.map((item, index) => {
    //     return(
    //       item
    //     )
    //   })
    // ) : (
    //   <div>no activies 2</div>
    // )
    return (
      <div className="container">
        <div className="city-header">
          <img src={BackIcon} className="back-button" onClick={this.handleGoHome}/>
          <h4 className="center card-title">{this.props.city.cityName}</h4>
        </div>
          <button onClick={this.handleShowActivityForm} className="btn pink center ">Add New Activity</button>
        {this.state.showActivityForm ? (
            <ActivityForm handleChange={this.props.handleChange} handleSubmit={this.handleSubmit}/>
        ) : (
          <div>test</div>
        )}
        {this.state.showNewActivity ? (
          <p>{this.state.activity}</p>
        ) : (
          <div>no activities yet</div>
        )}
      </div>
    )
    
    // const day = this.props.city.days.map((day, index) => {
    //   const date = day.date
    //   const activity = day.activity.map((item, index) => {
    //     return (
    //       <p>{item}</p>
    //     )
    //   })
    //   return (
    //     <div className="activity-wrapper">
    //       <p className="date">{date}</p>
    //       <p className="activity-item">{activity}</p>
    //     </div>
    //   )
    // })
    // const city = this.props.city ? (
    //   <div className="container section post card-content" key={this.props.city.id}> 
    //     <div className="city-header">
    //       <img src={BackIcon} className="back-button" onClick={this.handleGoHome}/>
    //       <h4 className="center card-title">{this.props.city.cityName}</h4>
    //     </div>
    //     {day}
    //   </div>
    // ) : (
    //   <div className="center">Loading cities...</div>
    // )

    // return (
    //   <div className="container">
    //       {city}
    //   </div>
    // )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = Math.round(ownProps.match.params.city_id)
  return {
    city:state.cityR.cities.find(city => city.id === id)
    }
}

export default connect(mapStateToProps)(CityPage)
