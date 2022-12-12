import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        <label htmlFor="character">Personagem:</label>
        <input type="text" name="character" id="character" />
      </div>
    )
  }
};

export default Input;
