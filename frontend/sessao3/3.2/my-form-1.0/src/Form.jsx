import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    email: '',
    about: '',
    select: '',
  }

  handleChange = ({ target }) => {
    const { name, value} = target;
    this.setState({
      [name]: value,
    })
  }
  render() {
    const { name, email, about, select } = this.state;
    return (
      <div>
        <h1 className="display-5">
          New Form
        </h1>
        <form>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                id="floatingInput"
                placeholder="Complete name"
                value={ name }
                onChange={ this.handleChange }
              />
              <label htmlFor="floatingInput">Name: </label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control" 
                id="floatingInput"
                placeholder="name@example.com"
                value={ email }
                onChange={ this.handleChange }
              />
              <label htmlFor="email">Email: </label>
            </div>
            
            <div className="form-floating">
              <textarea 
                name="about"
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                value={ about }
                onChange={ this.handleChange }
              ></textarea>
              <label htmlFor="textarea">About you:</label>
            </div>
            
            <div className="form-floating">
              <select 
                name="select"
                className="form-select"
                id="floatingSelect"
                value={ select }
                onChange={ this.handleChange }
              >
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="pink">Pink</option>
              </select>
              <label htmlFor="floatingSelect">Favorite Color</label>
            </div>
        </form>
      </div>
    )
  }
}

export default Form;
