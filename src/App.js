import React, { Component } from 'react'
import CityPage from './CityPage'
import CountryPage from './CountryPage'
import NewCity from './NewCity' 
import { BrowserRouter, Route, Switch  } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={(props) => <CountryPage {...props} /> } />
            <Route to path="/new" render={(props) => <NewCity {...props} /> } /> 
            <Route to path="/:city_id" render={(props) => <CityPage {...props} /> } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

