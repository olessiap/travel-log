import React, { Component } from 'react'

export class CountryPage extends Component {
  render() {
    console.log(this.props)
    let cities = this.props.cities.length ? (
      this.props.cities.map((city, item) => {
      return (
        <div className="post card" key={item}>
          <div className="card-content">
            <span className="card-title">{city.title}</span>
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
        <h1 className="country-title center">MEXICO</h1>
          {cities}
        <div className="footer">
          <div className="add-button">+</div>
        </div>
      </div>
    )
  }
}

export default CountryPage
