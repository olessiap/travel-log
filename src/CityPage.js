import React, { Component } from 'react'

export class CityPage extends Component {
  render() {
    let id = this.props.match.params.city_id
    console.log(id)
    return (
      <div className="container">
        {id}
      </div>
    )
  }
}

export default CityPage
