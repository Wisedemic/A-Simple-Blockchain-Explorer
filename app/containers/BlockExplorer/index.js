import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlockExplorer from './BlockExplorer';
import agent from 'agent';
import {
	addGlobalError
} from '../GlobalMessages/actions';
import {
	ADD_BLOCK_REQUEST,
  ADD_BLOCK_SUCCESS,
  ADD_BLOCK_FAILURE,
	GET_BLOCK_REQUEST,
  GET_BLOCK_SUCCESS,
  GET_BLOCK_FAILURE,
  CLOSE_ERROR
} from '../App/constants';
import {
  makeSelectBlocks,
  makeSelectLoading,
  makeSelectError
} from '../App/selectors'

const mapStateToProps = state => {
  const selectBlocks = makeSelectBlocks();
  const selectLoading = makeSelectLoading();
  const selectError = makeSelectError();
  return {
    blocks: selectBlocks(state),
    loading: selectLoading(state),
    error: selectError(state)
  };
};

// Action Creators
const mapDispatchToProps = dispatch => ({
	closeError: () =>
		dispatch({type: CLOSE_ERROR}),
	getBlocks: async () => {
		dispatch({type: GET_BLOCK_REQUEST });
    try {
      let response = await agent.Blockchain.addBlock(message);
      console.log('PAYLOAD', response);
			if (response.body.success) {
				dispatch({ type: GET_BLOCK_SUCCESS });
			} else if (response.body.error) {
				dispatch({ type: GET_BLOCK_FAILURE, message: response.body.message});
			} else {
	      dispatch({ type: GET_BLOCK_FAILURE, message: 'Something unexpected happened!'});
			}
    } catch (err) {
      dispatch(addGlobalError('Something unexpected happened!'));
    }
	},
	submitBlock: async (message) => {
    dispatch({type: ADD_BLOCK_REQUEST });
    try {
      let response = await agent.Blockchain.addBlock(message);
      console.log('PAYLOAD', response);
			if (response.body.success) {
				dispatch({ type: ADD_BLOCK_SUCCESS });
				dispatch(addGlobalSuccess('Block Added Successfully!'));
			} else if (response.body.error) {
				dispatch({ type: ADD_BLOCK_FAILURE, message: response.body.message});
			} else {
	      dispatch({ type: ADD_BLOCK_FAILURE, message: 'Something unexpected happened!'});
			}
    } catch (err) {
      dispatch(addGlobalError('Something unexpected happened!'));
    }
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(BlockExplorer);
