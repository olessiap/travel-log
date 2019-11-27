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
    return (
      <div className="container">
        {this.state.id}
      </div>
    )
  }
}

export default CityPage
