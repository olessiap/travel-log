import React, { Component } from 'react'
import CityPage from './CityPage'
import CountryPage from './CountryPage'
import NewCity from './NewCity' 
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import { connect } from 'react-redux'

export class App extends Component {
  render() {
    let id = this.props.cities.map((city, item) => {
      return city.id
    })
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={(props) => <CountryPage {...props} /> } />
            <Route to path="/new" render={(props) => <NewCity {...props} /> } /> 
            <Route to path="/:city_id" render={(props) => <CityPage {...props} city_id={id} /> } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    cities:state.cities
  }
}

export default connect(mapStateToProps)(App)

