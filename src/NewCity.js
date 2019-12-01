import React from 'react'

class NewCity extends React.Component {
  
  handleChange = (e) => {
    console.log(e.target.value)
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" name="city" onChange={this.handleChange}/>
          <textarea type="text" name="body" onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default NewCity
