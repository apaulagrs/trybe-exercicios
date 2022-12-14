export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
export const REQUEST_CHARACTER_SUCCESS = 'REQUEST_CHARACTER_SUCCESS';
export const REQUEST_CHARACTER_ERROR = 'REQUEST_CHARACTER_ERROR';

const requestCharacter = () => ({
  type: REQUEST_CHARACTER,
});

const responseCharacterSuccess = (character) => ({
  type: REQUEST_CHARACTER_SUCCESS,
  character,
});

const responseCharacterError = (error) => ({
  type: REQUEST_CHARACTER_ERROR,
  error,
});

export const fetchCharacterReducer = (characterName) => {
  return async (dispatch) => {
    dispatch(requestCharacter());

    try {
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${characterName}`);
      const data = await response.json();
      dispatch(responseCharacterSuccess(data));
    } catch (error) {
      dispatch(responseCharacterError(error));
    }
  }
};
