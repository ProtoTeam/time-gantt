import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class YAxis extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { nodes } = this.props;
    return (
      <g>
        {nodes.map((node, index) => {
          const y = 51 + 45 * index;
          return <text key={index} x="24" y={y} fill="#000" fillOpacity="0.45" fontSize="12">{node.yAxis}</text>
        })}
      </g>
    );
  }
}

export default YAxis;
