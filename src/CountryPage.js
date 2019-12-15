import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export class CountryPage extends Component {
  render() {
    console.log(this.props)
    const { cities } = this.props
    const cityList = cities.length ? (
      this.props.cities.map(city => {
      return (
        <div className="post card hoverable" key={city.id}>
          <div className="card-content">
            <Link to={'/' + city.id}>
              <span className="card-title">{city.cityName}</span>
            </Link>
          </div>
        </div>
      )
    })
    ) : (
      <div className="center">No cities added yet</div>
    )
    return (
      <div className="container">
        <h1 className="card-title center country-title">MEXICO</h1>
          {cityList}
        <div className="footer">
          <Link to={'/new'}>
            <div className="add-button">+</div>
          </Link>
          
        </div>
      </div>
    )
  }
}

//REDUX ALL CITIES
const mapStateToProps = (state) => {
  return {
    cities:state.cityR.cities
  }
}

export default connect(mapStateToProps)(CountryPage)
