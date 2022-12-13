import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharacterCard from './components/CharacterCard';
import { fetchCharacterReducer } from './redux/actions';

import './App.css';

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
      <div>
        <label htmlFor="character">Character's name:</label>
        <input
          type="text"
          name="character"
          id="character"
          onChange={ ({ target }) => this.setState({ characterInput: target.value }) }
          value={ characterInput }
          />
        <button
          type="button"
          onClick={ () => dispatch(fetchCharacterReducer(characterInput)) }
        >
          Search
        </button>
        <CharacterCard />
      </div>
    )
  }
};

export default connect()(App);
