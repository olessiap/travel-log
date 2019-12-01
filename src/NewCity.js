import React from 'react'
import { connect } from 'react-redux'
import { addNewCity, handleTextChange } from './redux/actions/cityActions.js'

class NewCity extends React.Component {
  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value,
      id: Math.floor(Math.random() * (1000 - 1)),
      userId:Math.floor(Math.random() * (1000 - 1))
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewCity(this.state)
    this.setState({
      id: '',
      userId: '',
      [e.target.id]: ''
    })
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">New City</h5>
          <div className="input-field">
            <label htmlFor="title">City</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">City Notes</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink center">Save</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCity: (city) => dispatch(addNewCity(city)),
  }
}

export default connect(null, mapDispatchToProps)(NewCity)
