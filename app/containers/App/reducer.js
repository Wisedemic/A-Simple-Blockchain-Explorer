import { fromJS } from 'immutable';
import {
  ADD_BLOCK_REQUEST,
  ADD_BLOCK_SUCCESS,
  ADD_BLOCK_FAILURE,
  CLOSE_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  blocks: [],
  loading: false,
  error: ''
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BLOCK_REQUEST:
      return state
        .set('loading', true);
    case ADD_BLOCK_FAILURE:
    case ADD_BLOCK_SUCCESS:
      return state
        .set('loading', false);
    case CLOSE_ERROR:
      return state
        .set('error', '');
    default:
      return state;
  }
}

export default appReducer;
