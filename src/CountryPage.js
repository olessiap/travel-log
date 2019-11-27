import React, { Component } from 'react'

export class CountryPage extends Component {
  render() {
    console.log(this.props)
    let cities = this.props.cities.map((city, item) => {
      return (
        <div className="card" key={item}>
          <h5>{city.title}</h5>
          <span>{city.body}</span>
        </div>
      )
    })
    return (
      <div className="main">
        <h1 className="country-title">MEXICO</h1>
          {cities}
        <div className="footer">
          <div className="add-button">+</div>
        </div>
      </div>
    )
  }
}

export default CountryPage
