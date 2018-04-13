import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Node from './node.jsx';
import './index.less';
import Blocking from './blocking.jsx';

class Nodes extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { columnWidth, nodes, showDate, showStartPercent, showPercent } = this.props;

    return (
      <g>
        {nodes.map((node, nodeIndex) => {
          return (
            <Node
              key={nodeIndex}
              node={node}
              nodeIndex={nodeIndex}
              showDate={showDate}
              showPercent={showPercent}
              showStartPercent={showStartPercent}
              columnWidth={columnWidth}
            />
          );
        })}
        <Blocking nodes={nodes} />
      </g>
    );
  }
}

export default Nodes;
