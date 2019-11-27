import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CountryPage extends Component {
  render() {
    const { cities } = this.props
    const cityList = cities.length ? (
      this.props.cities.map(city => {
      return (
        <div className="post card" key={city.id}>
          <div className="card-content">
            <Link to={'/' + city.id}>
              <span className="card-title">{city.name}</span>
            </Link>
            <p>{city.body}</p>
          </div>
        </div>
      )
    })
    ) : (
      <div className="center">No cities added yet</div>
    )
    return (
      <div className="container">
        <h1 className="card-title center">MEXICO</h1>
          {cityList}
        <div className="footer">
          <div className="add-button">+</div>
        </div>
      </div>
    )
  }
}

export default CountryPage
