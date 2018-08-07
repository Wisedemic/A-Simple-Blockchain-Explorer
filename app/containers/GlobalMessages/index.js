import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import reducerRegistry from '../../utils/reducerRegistry';
import reducer from './reducer';
import { selectGlobalMessages } from './selectors';
import { closeGlobalMessage } from './actions';
import GlobalMessages from './GlobalMessages';

const mapStateToProps =  state => ({
	globalMessages: selectGlobalMessages(state)
});

const mapDispatchToProps = dispatch => ({
	closeMessage: (index) => dispatch(closeGlobalMessage(index))
});

// Register Reducers
reducerRegistry.register('globalMessages', reducer);
export default connect(mapStateToProps, mapDispatchToProps)(GlobalMessages);
