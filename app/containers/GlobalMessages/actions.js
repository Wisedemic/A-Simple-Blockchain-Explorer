import {
  ADD_GLOBAL_SUCCESS,
  ADD_GLOBAL_PRIMARY,
  ADD_GLOBAL_INFO,
  ADD_GLOBAL_WARNING,
  ADD_GLOBAL_ERROR,
  CLOSE_GLOBAL_MESSAGE
} from './constants';

// Success
function addGlobalSuccess(message) {
  return { type: ADD_GLOBAL_SUCCESS, message };
}

// Primary color
function addGlobalPrimary(message) {
  return { type: ADD_GLOBAL_PRIMARY, message };
}

// Information
function addGlobalInfo(message) {
  return { type: ADD_GLOBAL_INFO, message };
}

// Warning
function addGlobalWarning(message) {
  return { type: ADD_GLOBAL_WARNING, message };
}

// Error
function addGlobalError(message) {
  return { type: ADD_GLOBAL_ERROR, message };
}

// Each error has an index-key
function closeGlobalMessage(index) {
  return { type: CLOSE_GLOBAL_MESSAGE, index };
}

export {
  addGlobalSuccess,
  addGlobalPrimary,
  addGlobalInfo,
  addGlobalWarning,
  addGlobalError,
  closeGlobalMessage
}
