import React, { Component } from 'react'

export class CityPage extends Component {
  state = {
    id:null
  }
  componentDidMount = () => {
    let id = this.props.match.params.city_id
    this.setState({
      id:id
    })
  }
  render() {
    const { cities } = this.props
    const city = cities.map(city => {
      if(city.id == this.state.id) {
        return(
          <div className="post" key={city.id}> 
            <h4 className="center">{city.name}</h4>
            <p>{city.body}</p>
          </div>
        )
      }
    })
    return (
      <div className="container">
        {city}
      </div>
    )
  }
}

export default CityPage
