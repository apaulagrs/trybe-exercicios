import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmailInput extends Component {
  render() {
    const { email, handleChange } = this.props;
    return (
      <div className="form-floating mb-3">
        <input
          type="email"
          name="email"
          className="form-control" 
          id="floatingInput"
          placeholder="name@example.com"
          value={ email }
          onChange={ handleChange }
        />
        <label htmlFor="email">Email: </label>
      </div>
    )
  }
}

EmailInput.propTypes = {
  email: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default EmailInput;
