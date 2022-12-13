import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacterReducer } from './redux/actions';

 class App extends Component {
  constructor() {
    super();
    this.state = {
      characterInput: '',
    }
  };

  render() {
    const { characterInput } = this.state;
    const { dispatch } = this.props;
    return (
      <div className='App'>
        <label htmlFor="character">Personagem:</label>
        <input
          type="text"
          name="character"
          id="character"
          onChange={ ({ target }) => this.setState({ characterInput: target.value }) }
          value={ characterInput }
          />
        <button
          onClick={ () => dispatch(fetchCharacterReducer(characterInput)) }
        >
          Enviar
        </button>
      </div>
    )
  }
};

export default connect()(App);
