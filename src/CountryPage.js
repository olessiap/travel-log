import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

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
          <Link to={'/new'}>
            <div className="add-button">+</div>
          </Link>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cities:state.cities
  }
}

export default connect(mapStateToProps)(CountryPage)
