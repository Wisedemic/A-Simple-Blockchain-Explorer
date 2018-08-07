import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddBlock from '../../components/AddBlock/';

class BlockExplorer extends Component {
  componentWillMount() {
    this.props.getBlocks();
  }

  render() {
    return (
      <React.Fragment>
        <AddBlock handleSubmit={this.props.submitBlock} />
        <div id="BlockExplorer">
          <nav className="panel">
            <p className="panel-heading">
              Block Explorer
            </p>
            {this.props.blocks.map((block) => {
              return <Block key={block.index} data={block} />
            })}
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default BlockExplorer;
