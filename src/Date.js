import React, { Component } from 'react'

export class Date extends Component {
  render() {
    console.log(this.props)
    return (
     <div>
       <div className="input-field">
        <label htmlFor="date">Date</label>
        <input type="text" className="date" id="date" onChange={this.props.handleChange}/>
      </div>
      <div className="input-field">
        <button onClick={this.props.handleAddNewActivity} className="btn pink center">Add New Activity</button>
      </div>
     </div>
    )
  }
}

export default Date
