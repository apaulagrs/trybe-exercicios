import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacterReducer } from '../redux/actions';

class Input extends Component {
  render() {
    const { characterInput, dispatch } = this.props;
    return (
      <div>
        <label htmlFor="character">Personagem:</label>
        <input
          type="text"
          name="character"
          id="character"
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

const mapStateToProps = (state) => ({
  name: state.characterReducer.name,
  gender: state.characterReducer.gender,
  culture: state.characterReducer.culture,
  titles: state.characterReducer.titles,
  playedBy: state.characterReducer.playedBy,
  errorMessage: state.characterReducer.errorMessage,
  isLoading: state.characterReducer.isLoading,
  characterInput: '',
});

export default connect(mapStateToProps)(Input);
