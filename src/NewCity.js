import React from 'react'
import { connect } from 'react-redux'
import { handleTextChange } from './redux/actions.js'
import $ from 'jquery'


// $(document).ready(function() {
//   Materialize.updateTextFields();
// });

class NewCity extends React.Component {
  
  handleChange = (e) => {
   console.log(e.target.value)
    this.setState({
      [e.target.id]:e.target.value,
      id: Math.floor(Math.random() * (1000 - 1)),
      userId:Math.floor(Math.random() * (1000 - 1))
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">New City</h5>
          <div className="input-field">
            <label htmlFor="city">City</label>
            <input type="text" id="city" onChange={this.handleChange}/>
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

const mapStateToProps = (state) => {
  return {
    currentCity: state.cityR.currentCity
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleTextChange: (e) => dispatch(handleTextChange(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCity)
