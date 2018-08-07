import { createSelector } from 'reselect';

const selectGlobalMessages = state => state.get('globalMessages');

export {
  selectGlobalMessages
};
