import React, { Component } from 'react'

export class ActivityForm extends Component {
  render() {
    return (
      <form className="white" onSubmit={this.props.handleSubmit}>
        {/* <div className="input-field">
          <label htmlFor="date">Date</label>
          <input type="text" className="datepicker" id="date-input"/>
        </div> */}
        <div className="input-field">
            <label htmlFor="content">City Notes</label>
            <input type="text" id="activity" onChange={this.props.handleChange}></input>
        </div>
        <div className="input-field">
          <button className="btn pink center">Save</button>
        </div>
      </form>
    )
  }
}

export default ActivityForm
