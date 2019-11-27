import React, { Component } from 'react'
import CityPage from './CityPage'
import CountryPage from './CountryPage'
import { BrowserRouter, Route  } from 'react-router-dom'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      cities:[
        {
          id:1,
          userId:1,
          name:"Cancun",
          body:"best things to do in Cancun is drink tequila, eat tacos, go to the beach, relax and have a great time!s"
        },
        {
          id:2,
          userId:1,
          name:"Playa De Carmen",
          body:"best things to do in Playa de Carmen is drink tequila, eat tacos, go to the beach, relax and have a great time!s"
        },
        {
          id:3,
          userId:1,
          name:"CDMX",
          body:"best things to do in CDMX is drink tequila, eat tacos, go to the beach, relax and have a great time!s"
        }
      ]
    }
  }
  render() {
    let id = this.state.cities.map((city, item) => {
      return city.id
    })
    return (
      <BrowserRouter>
        <Route exact path="/" render={(props) => <CountryPage {...props} cities={this.state.cities}/> } />
        <Route to path="/:city_id" render={(props) => <CityPage {...props} city_id={id}  cities={this.state.cities}/> } />
      </BrowserRouter>
    )
  }
}

export default App

