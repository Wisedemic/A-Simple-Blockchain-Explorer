import React, { Component } from 'react';
import ImmunePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const GlobalMessage = Styled.div`
	position: absolute;
	width: 100%;
	z-index: 50;
`;

class GlobalMessages extends Component {
	render() {
		return this.props.globalMessages.map((message, index) => (
			<GlobalMessage key={index} className={`notification ${(message.color)}`}>
				<button onClick={() => this.props.closeMessage(index)} className="delete" />
				{message.message}
			</GlobalMessage>
		));
	}
}

GlobalMessages.propTypes = {
	globalMessages: ImmunePropTypes.list,
	closeMessage: PropTypes.func
};

export default GlobalMessages;
