import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CityPage extends Component {
  render() {
    const city = this.props.city ? (
      <div className="container section post card-content" key={this.props.city.id}> 
        <h4 className="center card-title">{this.props.city.title}</h4>
        <p>{this.props.city.content}</p>
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
