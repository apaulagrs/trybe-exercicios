import React, { Component } from 'react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';

class Form extends Component {
  state = {
    name: '',
    email: '',
    about: '',
    select: '',
    terms: false,
    errors: true,
  }

  handleError = () => {
    const { name } = this.state;

    const errorCases = [
      name.length,
    ]

    const formChecked = errorCases.every((error) => error !== true);

    this.setState({
      errors: !formChecked,
    })
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }
  render() {
    const { name, email, about, select, terms, errors } = this.state;
    return (
      <div>
        <h1 className="display-5">
          New Form
        </h1>
        <form>
            <NameInput name={ name } handleChange={ this.handleChange } />

            <EmailInput email={ email } handleChange={ this.handleChange } />
            
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

            <div className="input-group mb-3">
              <input 
                type="checkbox"
                name="terms"
                className="form-check-input mt-0"
                id="checkbox"
                alue={ terms }
                onChange={ this.handleChange }
              />
              <label htmlFor="checkbox">I agree with all terms.</label>
            </div>
            { errors
              ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
              : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
        </form>
      </div>
    )
  }
}

export default Form;
