import { REQUEST_CHARACTER, REQUEST_CHARACTER_SUCCESS, REQUEST_CHARACTER_ERROR } from '../actions';

const INITAL_STATE = {
  isLoading: false,
  character: '',
}

const characterReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CHARACTER:
      return {
        ...state,
        isLoading: true,
      }
    case REQUEST_CHARACTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        character: action.character[0],
      }
    case REQUEST_CHARACTER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error || 'ERRO!'
      }
    default:
      return state;
  }
};

export default characterReducer;
