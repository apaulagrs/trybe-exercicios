import { REQUEST_CHARACTER, REQUEST_CHARACTER_SUCCESS, REQUEST_CHARACTER_ERROR } from '../actions';

const INITAL_STATE = {
  name: '',
  gender: '',
  culture: '',
  titles: '',
  playedBy: '',
  errorMessage: '',
  isLoading: false,
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
        isLoading: true,
        name: action.payload.name,
        gender: action.payload.gender,
        culture: action.payload.culture,
        titles: action.payload.titles,
        playedBy: action.payload.playedBy,
      }
    case REQUEST_CHARACTER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.error.message || 'ERRO!'
      }
    default:
      return state;
  }
};

export default characterReducer;
