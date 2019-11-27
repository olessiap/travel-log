import React, { Component } from 'react'
import CountryPage from './CountryPage'
import { BrowserRouter, Route  } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={CountryPage} />
      </BrowserRouter>
    )
  }
}

export default App

