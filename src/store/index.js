// Import Redux Store
import { createStore } from 'redux';

// Setup Inital State
const initialState = {};

// Store Reducer function to direct changes to state to an action
const reducer = (state = initialState, action) => {
  if (!action.type) {
    console.log('Reducing: ', action);
    switch (action.type) {
      case '':
        return state;
      default:
        return state;
    }
  } else {
      console.log('No Action Defined! State returned unchanged.');
      return state;
  }
}

const store = createStore(reducer);

export default store;
