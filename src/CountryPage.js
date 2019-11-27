import React, { Component } from 'react'

export class CountryPage extends Component {
  constructor(props) {
    super(props)

    this.state={
      cities:[
        {
          id:1,
          userId:1,
          title:"Cancun",
          body:"best things to do in Cancun is drink tequila, eat tacos, go to the beach, relax and have a great time!s"
        },
        {
          id:2,
          userId:1,
          title:"Playa De Carmen",
          body:"best things to do in Playa de Carmen is drink tequila, eat tacos, go to the beach, relax and have a great time!s"
        },
        {
          id:3,
          userId:1,
          title:"CDMX",
          body:"best things to do in CDMX is drink tequila, eat tacos, go to the beach, relax and have a great time!s"
        }
      ]
    }
  }
  render() {
    let cities = this.state.cities.map((city, item) => {
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
