import { List } from 'immutable';
import {
  ADD_GLOBAL_SUCCESS,
  ADD_GLOBAL_PRIMARY,
  ADD_GLOBAL_INFO,
  ADD_GLOBAL_WARNING,
  ADD_GLOBAL_ERROR,
	CLOSE_GLOBAL_MESSAGE,
} from './constants';

const initialState = List([]);

function reducer(state = initialState, action) {
  switch (action.type) {
		case ADD_GLOBAL_SUCCESS:
			return state
				.insert(0, {message: action.message, color: 'is-success'});
		case ADD_GLOBAL_PRIMARY:
			return state
				.insert(0, {message: action.message, color: 'is-primary'});
    case ADD_GLOBAL_INFO:
			return state
				.insert(0, {message: action.message, color: 'is-info'});
    case ADD_GLOBAL_WARNING:
			return state
				.insert(0, {message: action.message, color: 'is-warning'});
    case ADD_GLOBAL_ERROR:
			return state
				.insert(0, {message: action.message, color: 'is-danger'});
    case CLOSE_GLOBAL_MESSAGE:
      return state
        .delete(action.index);
		default:
      return state;
  }
}

export default reducer;
