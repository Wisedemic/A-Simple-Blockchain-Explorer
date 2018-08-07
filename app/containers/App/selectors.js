/**
 * The common state selectors
 */

import { createSelector } from 'reselect';

const selectCommon = (state) => state.get('common');
const selectRoute = (state) => state.get('route');

const makeSelectLoading = (state) => createSelector(
  selectCommon,
  (commonState) => commonState.get('loading')
);

const makeSelectBlocks = (state) => createSelector(
  selectCommon,
  (commonState) => commonState.get('blocks')
);

const makeSelectError = (state) => createSelector(
  selectCommon,
  (commonState) => commonState.get('error')
);

const makeSelectLocation = (state) => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectCommon,
  makeSelectBlocks,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
};
