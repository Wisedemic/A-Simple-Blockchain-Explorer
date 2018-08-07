import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddBlock extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
    this.onChangeMessage = evt => this.setState({ message: evt.target.value });
    this.submitMessage = (evt) => {
    	evt.preventDefault();
      this.props.handleSubmit(this.state.message);
    };
  }

  render() {
    return (
      <div id="addBlock">
        <form onSubmit={this.submitBlock}>
          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <button className="button is-info" onClick={this.submitMessage}>
                <span className="icon"><i className="fa fa-plus"></i></span>
                <span>Add Block</span>
              </button>
            </p>
            <p className="control is-expanded">
              <input
                type="text"
                className="input is-dark"
                value={this.state.message}
                onChange={this.onChangeMessage}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') this.submitMessage
                }}
                placeholder="Type a message you would like permenantly added to this Blockchain!"
              />
            </p>
          </div>
        </form>
      </div>
    );
  }
}

AddBlock.propTypes = {
  handleSubmit: PropTypes.func
};

export default AddBlock;
