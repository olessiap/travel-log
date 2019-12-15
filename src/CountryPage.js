import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addNewCity } from './redux/actions/cityActions.js'

export class CountryPage extends Component {
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value,
      id: Math.floor(Math.random() * (1000 - 1)),
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewCity(this.state)
    this.props.history.push(`/edit/${this.state.id}`)
    this.setState({
      id: '',
      cityName: ''
    })
    
  }
  
  render() {
    console.log(this.props)
    console.log(this.state)
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
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="title">Add New City</label>
            <input type="text" id="cityName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink center">Continue</button>
          </div>
        </form>
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
const mapDispatchToProps = (dispatch) => {
  return {
    addNewCity: (city) => dispatch(addNewCity(city)),
  }
}


//REDUX ALL CITIES
const mapStateToProps = (state) => {
  return {
    cities:state.cityR.cities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryPage)
