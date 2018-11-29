'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import './controls.css';

class NodeControls extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  resetNodePosition () {
    this.props.resetNodePositionCallback();
  }


  render () {
    return (
      <div className="vizceral-controls-panel">
        <div className="vizceral-control">
          <button type="button" className="btn btn-default btn-block btn-xs" onClick={this.resetNodePosition.bind(this)}>Reset Nodes Position</button>
        </div>
      </div>
    );
  }
}

NodeControls.propTypes = {
  resetNodePositionCallback: PropTypes.func.isRequired
};

export default NodeControls;
