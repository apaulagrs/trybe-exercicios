import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameInput extends Component {
  render() {
    const { name, handleChange } = this.props;
    const LIMIT_CARACTERES = 80;

    return (
      <div className="form-floating mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          id="floatingInput"
          placeholder="Complete name"
          value={ name }
          onChange={ handleChange }
        />
        <label htmlFor="floatingInput">Name: </label>
        { !name ? 'The name must be informed!' : '' }
        { name.length > LIMIT_CARACTERES
          ? 'Name mus be less than 180 characters' : '' }
      </div>
    );
  }
}

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default NameInput;
