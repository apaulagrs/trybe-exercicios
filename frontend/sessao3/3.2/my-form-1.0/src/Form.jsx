import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    email: '',
    about: '',
  }

  handleChange = (event) => {
    this.setState({
      about: event.target.value,
    })
  }
  render() {
    return (
      <div>
        <h1 class="display-5">
          New Form
        </h1>
        <form>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="Complete name"/>
              <label htmlFor="floatingInput">Name: </label>
            </div>

            <div class="form-floating mb-3">
              <input type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="email">Email: </label>
            </div>
            
            <div class="form-floating">
              <textarea 
                name="about"
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                value={ this.state.about }
                onChange={ this.handleChange }
              ></textarea>
              <label htmlFor="textarea">About you:</label>
            </div>
            
            <div class="form-floating">
              <select name="select" class="form-select" id="floatingSelect">
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
